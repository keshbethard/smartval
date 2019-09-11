import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"

class Kontakt extends React.Component {

  render() {
    return (
      <Layout name={'single'}>
        <SEO title="Kontakt" />
        <div className="single-content">
          <h1>Kontakt</h1>
          <p>Tusen frågor eller problem? Har du idéer eller förslag som du vill dela med dig? Letar du efter sammarbete? Tveka aldrig höra av dig så besvarar vi så fort vi bara kan!</p>
          <h2>Adress</h2>
          <p>E-post: <a href="mailto:info@smartval.nu">info@smartval.nu</a></p>
          <h2>Företag</h2>
          <p>ICSU Media - Handelsbolag<br/>
          Org.Nr. 969791-2971</p>
          <h2>Socialt</h2>
          <div className="social">
            <div><a href="https://www.facebook.com/smartval.nu/" target="_blank" rel="noopener noreferrer nofollow"><img src={Facebook} alt="Facebook" title="Facebook" /></a></div>
            <div><a href="https://www.instagram.com/smartval.nu/" target="_blank" rel="noopener noreferrer nofollow"><img src={Instagram} alt="Instagram" title="Instagram" /></a></div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Kontakt
