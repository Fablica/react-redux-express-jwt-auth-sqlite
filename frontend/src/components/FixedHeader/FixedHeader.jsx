import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Dropdown, Image, Menu } from "semantic-ui-react";

import classes from "./FixedHeader.css";

export const FixedHeader = ({ user }) => (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as={NavLink} to="/login" header>
          <Image
            size="mini"
            src="/assets/logo.png"
            classes={classes.fixedHeaderLogoImage}
          />
          Re-login Demo
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as="a">
            <Image
              avatar
              verticalAlign="middle"
              src={user.imageURL || "/assets/user.png"}
              classes={classes.fixedHeaderAvatarImage}
            />
            {user.firstName} {user.lastName}
          </Menu.Item>
          <Menu.Item as="a">Home</Menu.Item>

          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item as={NavLink} to="/login">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Container>
    </Menu>
);
