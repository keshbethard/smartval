import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { navigate } from '@reach/router'
import Stars from "../components/Rating"

class IndexPage extends React.Component {
  handleChange = e => {
    navigate(e.target.value);
  };

  render() {
    return (
      <Layout name={'landing'}>
        <SEO title="Vi listar och rangordnar alla jämförelsetjänster på nätet." />
        <div className="hero">
          <h1>Smidigare väg till en bra jämförelsetjänst.</h1>
          <div className="landing-stars">
            {Stars(5)}
          </div>
          <p>Samlingsplats för tjänster som jämför <Link to="lan">lån</Link>, <Link to="kreditkort">kreditkort</Link>, <Link to="hotell">hotell</Link> och mycket mer.</p>
          <div className="filter">
            <h2>Vad vill du jämföra?</h2>
            <div className="selection">
              <select onChange={this.handleChange}>
                <option defaultValue label="Välj" />
                <option value="elavtal">Elavtal</option>
                <option value="flygresor">Flygresor</option>
                <option value="forsakring">Försäkring</option>
                <option value="hotell">Hotell</option>
                <option value="kreditkort">Kreditkort</option>
                <option value="lan">Lån</option>
                <option value="mat">Mat</option>
                <option value="spelbolag">Spelbolag</option>
              </select>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}


export default IndexPage
