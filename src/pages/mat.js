import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import Rate from '../components/Rate'
import SEO from "../components/seo"
import data from '../utilities/data/mat'
import { Link } from "gatsby"

class Mat extends React.Component {

  render() {
    return (
      <Layout name={'category'}>
        <SEO 
          title="Mat"
          description="Vi listar och rangordnar alla gratis tjänster som jämför mat och matkassar. Hitta din nästa matleverantör med Smartval. Du hittar även: ✓ Kreditkort ✓ Flygresor ✓ Försäkringar mm."
        />
        <div className="category-content mat">
          <h1>Mat</h1>
          <span className="total">Totalt: {data.length}</span>
          <p className="category-description">Nedan listar vi alla jämförelsetjänster för mat. Noga utvärderade baserat på <Link to="/betyg">våra kriterier</Link>.</p>
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
          <span className="category-disclaimer">Saknar du en bra jämförelsetjänst för mat i listan ovan? <a href="/kontakt">Hör av dig</a> till oss!</span>
        </div>
      </Layout>
    )
  }
}

export default Mat
