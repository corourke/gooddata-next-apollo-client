import {gql, graphql} from "react-apollo"
import ErrorMessage from "./ErrorMessage"

var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
});

function Metric({data: {loading, error, metric}}) {
    if (error) return <ErrorMessage message="Error fetching data."/>
    if (metric) {
        return (
            <div>
                <h1>{formatter.format(metric.data)}</h1><br />
                <p>{metric.title}</p>
                <style jsx>{`
          h1 {
            display: inline;
            margin-bottom: 3px;
            margin-top: 3px;
          }
          p {
            display: inline;
          }
          div {
            text-align: center;
            margin-right: 20px;
            border: #999;
            border-style: solid;
            border-radius: 6px;
            border-width: 1px;
            padding: 10px;
            float: left;
          }
        `}</style>
            </div>
        )
    }
    return <div>Loading</div>
}

// Defining a GraphQL query for this component
const metric = gql`
query Metric($id: ID!) {
  metric(id: $id) {
    title
    id
    format
    data
  }
}
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component
export default graphql(metric, {
    options: (props) => ({
        variables: {
            id: props.metricId
        }
    }),
    props: ({data}) => ({
        data
    })
})(Metric)
