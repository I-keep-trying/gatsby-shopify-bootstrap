import React from "react"

const Footer = () => (
    <footer>
      <span>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </footer>
)

export default Footer