import * as React from "react"
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Facu Page">
      <h1>Bienvenido</h1>
      <h2>Soy Facu.</h2>
     
    </Layout>
  )
}
// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Facu Page</title>
// Step 3: Export your component
export default IndexPage