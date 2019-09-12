import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import SEO from "../components/seo"
import { Link } from "gatsby"

class Cookies extends React.Component {

  render() {
    return (
      <Layout name={'single'}>
        <SEO title="Betyg" />
        <div className="single-content">
          <h1>Cookies</h1>
          <p>För att förbättra din upplevelse hos oss på Smartval använder vi oss av cookies, web beacons och liknande tekniker (gemensamt kallade ”cookies”).</p>
          <h2>Vad är en cookies?</h2>
          <p>En cookie är en liten textfil (oftast mindre än 1 kB) som sparas i din dator och lagrar information. Cookies används bland annat för att förbättra webbplatsen för användaren.</p>
          <h4>Olika typ av cookies</h4>
          <ul>
            <li>Sessionscookies – tillfälliga cookies som upphör när du stänger din webbläsare.</li>
            <li>Varaktiga cookies – cookies som ligger kvar tills du raderar dem eller de upphör att gälla.</li>
            <li>Tredjepartscookies – cookies satta av en tredjepartssida.</li>
          </ul>

          <h2>Cookies vi använder</h2>
          <ul>
            <li>Google Analytics – verktyg som används för att samla in information vi använder för statistik och optimering av vår marknadsföring. Här kan du läsa mer om <a href="https://policies.google.com/privacy" rel="noopener noreferrer nofollow">Google Analytics</a>.</li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default Cookies
