import {gql, graphql} from "react-apollo"
import SvgGauge from 'react-svg-gauge';


function Gauge({data: {loading, error, metric}, color}) {
    if (metric) {
        console.log(color);
        return (
            <div>
                <SvgGauge value={(metric.data*100).toLocaleString("en", {style: 'decimal', maximumFractionDigits: 1})}
                          width={140} height={100} label={metric.title} color={color}
                          topLabelStyle={topLabelStyle}
                          valueLabelStyle={valueLabelStyle}
                          minMaxLabelStyle={minMaxLabelStyle}/>
                <style jsx>{`
                    div { margin: 10px 20px; }
                `}
                </style>
            </div>

        );
    }
    return <div>Loading</div>
}

const topLabelStyle = {
    fontVariant: 'all-small-caps',
    fontSize: '16px'
}

const valueLabelStyle = {
    fontSize: '24px',
    fontWeight: 400,
    fontColor: '#999999'
}

const minMaxLabelStyle = {
    display: 'none'
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
})(Gauge)
