import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../../images/smartval.png'

import "./header.scss"

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  toggleHamburger = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  }

  render() {
    return (
      <header className={this.state.active ? 'active' : ''}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Smartval.nu" title="Smartval.nu" />
            </Link>
          </div>
          <a className={this.state.active ? 'hamburger active' : 'hamburger'} onClick={this.toggleHamburger}>
            Meny
          </a>

          {this.state.active && (
            <div className="menu">
              <h4>Jämför</h4>
              <Link to="/elavtal" activeClassName="active">Elavtal</Link>
              <Link to="/forsakring" activeClassName="active">Försäkring</Link>
              <Link to="/flygresor" activeClassName="active">Flygresor</Link>
              <Link to="/hotell" activeClassName="active">Hotell</Link>
              <Link to="/investering" activeClassName="active">Investering</Link>
              <Link to="/kreditkort" activeClassName="active">Kreditkort</Link>
              <Link to="/lan" activeClassName="active">Lån</Link>
              <Link to="/mat" activeClassName="active">Mat</Link>
              <Link to="/spelbolag" activeClassName="active">Spelbolag</Link>
              <h4>Information</h4>
              <Link to="/om-oss" activeClassName="active">Om oss</Link>
              <Link to="/betyg" activeClassName="active">Betyg</Link>
              <Link to="/kontakt" activeClassName="active">Kontakt</Link>
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default Header
