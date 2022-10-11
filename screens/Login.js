import { useState } from "react";
import { Button, View, StyleSheet, Text } from "react-native";

export default function Login({ isLoggedIn, setIsLoggedIn }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <View style={[styles.container, isPressed && { backgroundColor: "blue" }]}>
      <Text>Login page</Text>
      <Button
        title="Login"
        onPress={() => {
          setIsPressed(!isPressed);
          setIsLoggedIn(!isLoggedIn);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
