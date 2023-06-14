import { navigate } from 'gatsby'
import React, { useEffect } from 'react'

// url : '/' (root)
const IndexPage = () => {
  useEffect(() => {
    // redirection
    navigate(process.env.REACT_APP_MAIN_INDEX, { replace: true });
  }, []);

  return (
    <div>
    </div>
  )
}
export default IndexPage