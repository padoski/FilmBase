import React, { useState, useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { View, StyleSheet } from "react-native";
import { Button, Input, Image, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageURL, setImageURL] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };

  return (
    <SafeAreaView behavior="padding" style={styles.container}>
      <Text h3 style={{ marginBottom: 50 }}>
        Stwórz konto FilmBase{" "}
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="E-mail"
          autoFocus
          type="text"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          placeholder="Hasło"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <Button
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: "#fb9327" }}
        raised
        onPress={register}
        title="Zarejestruj"
      />
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
