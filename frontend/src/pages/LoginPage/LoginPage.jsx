import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Form,
  Header,
  Segment,
  Button,
  Grid,
  Image,
  Message
} from "semantic-ui-react";

import { userActions } from "../../actions";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    // reset login status
    this.props.dispatch(userActions.logout());

    this.state = {
      username: "",
      password: "",
      submitted: false
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="ui inverted vertical masthead center aligned segment">
        <Grid
          textAlign="center"
          style={{ minHeight: 700 }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/assets/logo.png" /> Log-in to your account
            </Header>
            {submitted && !username ? (
              <Message error>Username is required</Message>
            ) : (
              <div />
            )}
            {submitted && !password ? (
              <Message error>Password is required</Message>
            ) : (
              <div />
            )}
            <br />
            <Form size="large" name="form" onSubmit={this.handleSubmit}>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="User Name"
                  name="username"
                  error={submitted && !username}
                  value={username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  name="password"
                  error={submitted && !password}
                  value={password}
                  onChange={this.handleChange}
                />
                <Button color="teal" fluid size="large" disabled={!username || !password} loading={loggingIn}>
                  Login
                </Button>
              </Segment>
            </Form>
            {/* <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message> */}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };
