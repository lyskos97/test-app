import * as React from 'react';
import { Menu, MenuItem } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default class Nav extends React.Component {
  headerNode;
  constructor() {
    super();

    this.state = {
      sticky: false
    };
  }

  // componentDidMount() {
  //   window.addEventListener('scroll', this.onScroll);
  // }

  // onScroll = () => {
  //   if (window.pageYOffset >= this.headerNode.getBoundingClientRect().height + 1) {
  //     this.setState({ sticky: true });
  //   } else {
  //     this.setState({ sticky: false });
  //   }
  // };

  render() {
    // const { sticky } = this.state;

    return (
      <header
        ref={ref => {
          this.headerNode = ref;
        }}
      >
        <Menu inverted fluid fixed="top">
          <MenuItem exact as={NavLink} to="/">
            Home
          </MenuItem>
          <MenuItem as={NavLink} to="/about">
            About us
          </MenuItem>
          <MenuItem as={NavLink} to="/contact">
            Contact us
          </MenuItem>
        </Menu>
      </header>
    );
  }
}
