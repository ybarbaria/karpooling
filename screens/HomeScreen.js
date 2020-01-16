import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Background>
        <Logo />
        <Header>KarPooling Login</Header>

        <Paragraph>
          We connect passengers and drivers ready to share their journey by car to allow them to go everywhere, and without change...
      </Paragraph>
        <Button mode="contained" onPress={() => this.props.navigation.navigate("LoginScreen")}>
          Login
      </Button>
        <Button
          mode="contained"
          onPress={() => this.props.navigation.navigate("RegisterScreen")}
        >
          Sign Up
      </Button>
      </Background>
    );
  }
}
