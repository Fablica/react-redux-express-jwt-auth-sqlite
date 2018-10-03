import React, { Component } from 'react'
import { connect } from "react-redux";
import { userActions } from "../../actions";

class UserDetailedPage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUserDetailed(this.props.match.params.id));

  }

  render() {
    const { users } = this.props;
    console.log(users.userDetailed)
    return (
      <div>
        { users.userDetailed &&
          users.userDetailed.map(user => <div key={user.id}>{user.firstName}</div>)
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
