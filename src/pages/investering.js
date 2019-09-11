import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import Rate from '../components/Rate'
import SEO from "../components/seo"
import data from '../utilities/data/investering'
import { Link } from "gatsby"

class Investering extends React.Component {

  render() {
    return (
      <Layout name={'category'}>
        <SEO title="Investering" />
        <div className="category-content investering">
          <h1>Investering</h1>
          <span className="total">Totalt: {data.length}</span>
          <p className="category-description">Nedan listar vi alla jämförelsetjänster för investering. Noga utvärderade baserat på <Link to="/betyg">våra kriterier</Link>.</p>
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
          <span className="category-disclaimer">Saknar du en bra jämförelsetjänst för investering i listan ovan? <a href="/kontakt">Hör av dig</a> till oss!</span>
        </div>
      </Layout>
    )
  }
}

export default Investering
