import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Header, Popup, Image } from "semantic-ui-react";

import { userActions } from "../../actions";
import { FixedHeader } from "../../components";

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getAll());
  }

  render() {
    const { user, users } = this.props;
    return (
      <div>
        <FixedHeader user={user} users={users} />
        <Container text style={{ marginTop: "7em" }}>
          <Header as="h1">Semantic UI React Fixed Template</Header>
          <p>
            This is a basic fixed menu template using fixed size containers.
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
          <div>
            {users.items &&
              users.items.map((user, index) => (
                <Popup
                  key={user.id}
                  trigger={<Image src={"/assets/user.png"} avatar />}
                  header={user.firstName + " " + user.lastName}
                  content="user info"
                  on='hover'
                />
              ))}
          </div>
          <p>
            <Link to="/login">Logout</Link>
          </p>
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
