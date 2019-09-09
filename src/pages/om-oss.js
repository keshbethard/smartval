import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

class Omoss extends React.Component {

  render() {
    return (
      <Layout name={'single'}>
        <SEO title="Om oss" />
        <div className="single-content">
          <h1>Om oss</h1>
          <p>Smartval grundades i Sverige 2019 av ICSU Media, med målet att göra det enklare för människor att hitta sig fram till en bra jämförelsetjänst. Internet idag är fullt av tjänster som påstår sig vara den bästa. Det är heller inte alltid lätt att veta vilka aktörer det finns, om de är bra och om de passar ens behov. Därför har vi valt att skapa den här samlingsplatsen och betygsätta de olika tjänsterna uttifrån hur vi uppleverer de levererar.
            <br/>Läs mer om <Link to="/betyg">betyg</Link> om du vill veta mer om hur vi gör våra bedömningar.</p>
          <p>Idag listar vi och rangordnar över 300 olika jämförelsetjänster och bolag. Med flera olika kategorier och ett ständigt växande sortiment har vi som mål att bli den största samlingsplatsen för jämförelsesidor i Sverige.</p>
          <p>Projektet är alltid öppet för kreativa idéer och sammarbeten. Tveka därför aldrig att <Link to="/kontakt">höra av dig</Link>.</p>
        </div>
      </Layout>
    )
  }
}

export default Omoss
