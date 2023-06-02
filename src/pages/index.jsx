import { navigate } from 'gatsby'

// url : '/' (root)
const IndexPage = () => {
  navigate(process.env.REACT_APP_MAIN_INDEX);
}
export default IndexPage