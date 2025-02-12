import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

const Background = ({ children }) => (
  <ImageBackground
    // source={require("../assets/images/background_dot.png")}
    resizeMode="repeat"
    style={styles.background}
  >
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%"
  },
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 10,
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default memo(Background);
