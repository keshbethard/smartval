import React from "react"
import Layout from "../components/Layout"
import Stars from '../components/Rating'
import SEO from "../components/seo"
import { Link } from "gatsby"

class Betyg extends React.Component {

  render() {
    return (
      <Layout name={'single'}>
        <SEO title="Betyg" />
        <div className="single-content">
          <h1>Betyg</h1>
          <p>För att bibehålla kvalité har vi på Smartval valt att vara helt transparanta och helt opartiska när det kommer till betygsutdelning och rang på vår sida. Håller du inte med eller har några synpunkter är du välkommen att <Link to="/kontakt">ta kontakt med oss</Link>.</p>
          <h2>Hur bedömer vi?</h2>
          <p>För att kunna ge en ärlig betyg börjar vi arbetet med att noggrant granska jämförelsetjänsten genom att helt enkelt testa den ur en användares perspektiv. Vi tar alltid en extra titt på hur stort utbud tjänsten har då vi finner det väldigt relevant. För att få toppbetyg bör tjänsten också vara informativ och det ska vara enkelt att hitta sig fram. Kvalité på information är ett krav och smarta funktioner är ett stort plus. Vissa tjänster är mer populära än andra och oftast av en bra anledning, för de är bättre. Givetvis räknar vi in även detta när vi sätter vår slutgiltiga betyg.</p>
          <h4>Vad tittar vi på?</h4>
          <ul>
            <li>Utbud</li>
            <li>Funktionalitet</li>
            <li>Populäritet</li>
            <li>Konkurrens</li>
          </ul>

          <h2>Stjärnor</h2>
          {Stars(5)}
          <p>Toppbetyg – Något vi sällan delar ut förutom till de som vi tycker är exceptionella inom sin bransch.</p>
          {Stars(4)}
          <p>Bra betyg men inte bäst, ändå något vi verkligen kan rekommendera för användning men som saknar det där lilla extra.</p>
          {Stars(3)}
          <p>Tjänster som är fullt användbara men som har sina för- och nackdelar.</p>
          {Stars(2)}
          <p>Helt ok tjänst men inget mer.</p>
          {Stars(1)}
          <p>Tjänster vi inte tycker håller måttet enligt våra krav.</p>
          {Stars(0)}
          <p>Tjänsten har väldigt många brister och bör ej användas och ibland till och med existera.</p>
        </div>
      </Layout>
    )
  }
}

export default Betyg
