import React, { Component } from 'react'
import { connect } from "react-redux";
import { userActions } from "../../actions";

class UserDetailedPage extends Component {
//  componentDidMount() {
//    this.props.dispatch(userActions.getUserDetailed(this.props.match.params.id));
//  }
  render() {
    const {userDetailed} = this.props;
<<<<<<< HEAD
    return (
      <div>
        {userDetailed}
=======
    console.log(userDetailed)
    return (
      <div>
>>>>>>> 2d0f897a19bafd5cd48b436f3e72cce3864d0c25
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { userDetailed, authentication } = state;
  const { user } = authentication;
  return {
    user,
    userDetailed
  };
}

const connectedUserDetailedPage = connect(mapStateToProps)(UserDetailedPage);
export { connectedUserDetailedPage as UserDetailedPage };
