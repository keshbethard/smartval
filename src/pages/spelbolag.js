import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import Rate from '../components/Rate'
import SEO from "../components/seo"
import data from '../utilities/data/spelbolag'
import { Link } from "gatsby"

class Spelbolag extends React.Component {

  render() {
    return (
      <Layout name={'category'}>
        <SEO 
          title="Spelbolag"
          description="Vi listar och rangordnar alla gratis tjänster som jämför spelbolag. Hitta ett bra spelbolag med Smartval. Du hittar: ✓ Casino ✓ Betting ✓ Bingo mm."
        />
        <div className="category-content spelbolag">
          <h1>Spelbolag</h1>
          <span className="total">Totalt: {data.length}</span>
          <p className="category-description">Nedan listar vi alla jämförelsetjänster för spelbolag. Noga utvärderade baserat på <Link to="/betyg">våra kriterier</Link>.</p>
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
                <a href={item.link} target="_blank" rel={item.follow ? "" : "noopener noreferrer nofollow"}>Besök</a>
              </div>
            </div>
          ))}
          <span className="category-disclaimer">Saknar du en bra jämförelsetjänst för spelbolag i listan ovan? <a href="/kontakt">Hör av dig</a> till oss!</span>
        </div>
      </Layout>
    )
  }
}

export default Spelbolag
