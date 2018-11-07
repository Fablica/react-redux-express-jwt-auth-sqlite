import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Header } from "semantic-ui-react";

import { userActions } from "../../actions";
import { FixedHeader } from "../../components";
import { UserImageCard } from "../../components";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <FixedHeader user={user} />
        <Container text style={{ marginTop: "7em" }}>
          <Header as="h1">Semantic UI React Fixed Template</Header>
          <p>
            This is a basic fixed menu template using fixed size pages.
          </p>
          <p>
            A text container is used for the main container, which is useful for
            single column layouts.
          </p>
          <h3>Users from secure api end point:</h3>
          {users.loading && <em>Loading users...</em>}
          {users.error && (
            <span className="text-danger">ERROR: {users.error}</span>
          )}
          <UserImageCard users={users}/>
          </Container>
      </div>
    );
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

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };
