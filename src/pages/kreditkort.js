import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import SEO from "../components/seo"
import data from '../utilities/data/kreditkort'

class Kreditkort extends React.Component {

  render() {
    return (
      <Layout name={'category'}>
        <SEO title="Kreditkort" />
        <div className="category-content kreditkort">
          <h1 className="kreditkort">Kreditkort</h1>
          <span className="total">Totalt: {data.length}</span>
          {data.sort((a, b) => b.rating - a.rating).map(item => (
            <div className="block" key={item.id}>
              <div className="name-rating">
                <h3 className="name">{item.name}</h3>
                <div className="rating">
                  {Stars(item.rating)}
                </div>
              </div>
              <div className="link">
                <a href={item.link} target="_blank" rel="noopener noreferrer nofollow">Besök</a>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    )
  }
}

export default Kreditkort
