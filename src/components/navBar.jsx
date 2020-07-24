import React, { Component } from 'react';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

class NavBar extends Component {
  state = { navActive: false, subNavActive: false }


  handleSubNavClick = () => {
    if (this.state.subNavActive === false) {
      this.setState({ subNavActive: true })
    }
    else { this.setState({ subNavActive: false }) }
  }


  handleNavClick = () => {
    if (this.state.navActive === false) {
      this.setState({ navActive: true })
    }
    else { this.setState({ navActive: false }) }

  }

  render() {
    const {navActive, subNavActive} = this.state;
    return (<React.Fragment>
      <MobileNav onNavClick={this.handleNavClick} NavOpen={navActive} onSubNavClick={this.handleSubNavClick} SubNavOpen={subNavActive}/>
      <DesktopNav />
    </React.Fragment>);
  }
}

export default NavBar;