/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <script
      key="1"
      type="text/javascript"
      src="https://kit.fontawesome.com/a4532d9c2a.js"
    />,
  ])

}