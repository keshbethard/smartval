import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import Rate from '../components/Rate'
import SEO from "../components/seo"
import data from '../utilities/data/elavtal'
import { Link } from "gatsby"

class Elavtal extends React.Component {

  render() {
    return (
      <Layout name={'category'}>
        <SEO 
          title="Elavtal"
          description="Vi listar och rangordnar alla gratis tjänster som jämför elavtal. Hitta din nästa elleverantör med Smartval. Du hittar även: ✓ Lån ✓ Kreditkort ✓ Investeringar mm."
        />
        <div className="category-content elavtal">
          <h1>Elavtal</h1>
          <span className="total">Totalt: {data.length}</span>
          <p className="category-description">Nedan listar vi alla jämförelsetjänster för elavtal. Noga utvärderade baserat på <Link to="/betyg">våra kriterier</Link>.</p>
          {data.sort((a, b) => b.rating - a.rating).map(item => (
            <div className="block" key={item.id}>
              <div className="name-rating">
                <h3 className="name">{item.name}</h3>
                <div className="rating">
                  {Stars(item.rating)}
                </div>
              </div>
              <Rate />
              <div className="link">
                <a href={item.link} target="_blank" rel="noopener noreferrer nofollow">Besök</a>
              </div>
            </div>
          ))}
          <span className="category-disclaimer">Saknar du en bra jämförelsetjänst för elavtal i listan ovan? <a href="/kontakt">Hör av dig</a> till oss!</span>
        </div>
      </Layout>
    )
  }
}

export default Elavtal
