import React from "react";
import { Nav, NavItem, Glyphicon } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";

// Menu component
export default class Menu extends React.Component {
  // render
  render() {
    return (
      <Nav bsStyle="pills">
        <IndexLinkContainer to="/">
          <NavItem>
            Home
          </NavItem>
        </IndexLinkContainer>
        {/*
          <LinkContainer to="/water">
            <NavItem>
              Water <Glyphicon glyph="tint"/>
            </NavItem>
          </LinkContainer> 
          */
        }
        <LinkContainer to="/electricity">
          <NavItem>
            Electricity <Glyphicon glyph="certificate"/>
          </NavItem>
        </LinkContainer> 
        <LinkContainer to="/waterext">
          <NavItem>
            Water <Glyphicon glyph="tint"/>
          </NavItem>
        </LinkContainer>         
      </Nav>
    );
  }
}
