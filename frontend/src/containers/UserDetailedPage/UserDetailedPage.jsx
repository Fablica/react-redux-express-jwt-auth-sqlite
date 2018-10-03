import React, { Component } from 'react'
import { connect } from "react-redux";
import { userActions } from "../../actions";

class UserDetailedPage extends Component {
  componentDidMount() {
    this.props.dispatch(userActions.getUserDetailed(this.props.match.params.id));

  }
  render() {
    const {userDetailed} = this.props;
    console.log(this.props)
    return (
      <div>
        {userDetailed}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, userDetailed, authentication } = state;
  const { user } = authentication;
  return {
    user,
    users,
    userDetailed
  };
}

const connectedUserDetailedPage = connect(mapStateToProps)(UserDetailedPage);
export { connectedUserDetailedPage as UserDetailedPage };
