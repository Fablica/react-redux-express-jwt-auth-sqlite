import React, { Component } from 'react'
import { connect } from "react-redux";
import { Container, Header } from "semantic-ui-react";

import { userActions } from "../../actions";
import { FloatedItem } from "../../components";
import { FixedHeader } from "../../components";
//import { classes } from "./UserDetailedPage.css";


class UserDetailedPage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUserDetailed(this.props.match.params.id));

  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <FixedHeader user={user} />
        { users.userDetailed &&
          users.userDetailed.map( user =>
            <Container key={ user.id } text style={{ marginTop: '7em' }}>
              <Header as='h1'>{ user.firstName + ' ' + user.lastName }</Header>

              <FloatedItem paddingTop={'10px'} paddingbottom={'10px'} backgroundColor={ "22222e" } imageURL={ user.imageURL } comment={ user.comment }/>
            </Container>
          )
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users
  };
}

const connectedUserDetailedPage = connect(mapStateToProps)(UserDetailedPage);
export { connectedUserDetailedPage as UserDetailedPage };
