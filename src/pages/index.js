import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Facu Page">
      <h1>Bienvenido</h1>
      <h2>Soy Santi Longo.</h2>
      <StaticImage 
        alt="El mejor jugador de Belgrano"
        src="https://www.lavoz.com.ar/resizer/ZK_9sBSluMVkP1Wl-e20S7X8WLM=/1023x682/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/62RJLOB3RFBERHTVCWURT6REKI.jpg"
      />   
     
    </Layout>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page"/>
// Step 3: Export your component
export default IndexPage