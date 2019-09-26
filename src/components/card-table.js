/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import EmojiCard from "./emoji-card"

import "../static/card-table.css"

const CardTable = () => {
//   const data = useStaticQuery(graphql`
//   query Test {
//     test: file(absolutePath: {regex: "/test2.png/"}) {
//       childImageSharp {
//         fixed(width: 100, height: 100) {
//             ...GatsbyImageSharpFixed
//         }
//       }
//     }
//   }`
//   )

  return (
    <>  
    <div className="wrapper">
        <div className="card-table">
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
            <EmojiCard/>
        </div>
    </div>
    </>
  )
}

export default CardTable
