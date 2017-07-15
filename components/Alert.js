import {Alert} from 'react-bootstrap'

export default ({message, style = "danger"}) => (
  <Alert bsStyle={style}>
    {message}
  </Alert>
)
