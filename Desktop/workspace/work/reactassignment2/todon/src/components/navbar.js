import React from 'react';
import './navbar.css';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <div className="container-navbar">
        <Menu>
          <Menu.Item name='Logo' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item className="nav"
            name='Mypost'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
            as={Link} to="/" 
          />
          <Menu.Item className="nav"
            name='Addpost'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
            as={Link} to="/addpost" // Add this line
          />
          
          <Menu.Item className="navs"
            name='Logout'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          
        </Menu>
      </div>
    );
  }
}

export default Navigation;
