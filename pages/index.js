import App from "../components/App"
import Header from "../components/Header"
import Metric from "../components/Metric"
import Gauge from "../components/Gauge"
import withData from "../lib/withData"

export default withData((props) => (
    <App>
        <Header pathname={props.url.pathname}/>
        <Metric metricId="adlts78WhfEv"/>
        {/*<Metric metricId="aa5QHBqTgCEo"/>*/}
        <Gauge metricId="aajLdj1Wejme" color="#5D8CEF"/>
    </App>
))
