import * as React from 'react'

import Layout from '../components/layout'
// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="Sobre Facu">
      <h1>Sobre Mi</h1>
      <p>Hola estoy probando Gatsby.</p>
    </Layout>
  )
}

export const Head = () => (
    <>
        <title>Sobre Facu</title>
        <meta name="Todo sobre mi" content="Soy el mejor contratame" />
    </>
)
// Step 3: Export your component
export default AboutPage