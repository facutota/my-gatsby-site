import * as React from "react"

//importando lo necesario para Graphql
import { useStaticQuery, graphql } from "gatsby"


const Header = () => {
    //usando el query de graphql
    const data = useStaticQuery(graphql`
        query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }

    `)

    return(
       
       <header>
            {/*Poniendo la info en el componente*/}
            <h1>{data.site.siteMetadata.title}</h1>
            <h2>{data.site.siteMetadata.description}</h2>

        </header>
        
    )
}

export default Header