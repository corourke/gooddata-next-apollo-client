import App from "../components/App"
import Header from "../components/Header"
import Metric from "../components/Metric"
import withData from "../lib/withData"

export default withData((props) => (
    <App>
        <Header pathname={props.url.pathname}/>
        <Metric metricId="adlts78WhfEv"/>
        <Metric metricId="ab4pEGL1eJ3c"/>
    </App>
))
