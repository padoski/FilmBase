import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "../../firebase";
const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [autor, setAutor] = useState("");
  const [watched, setWatched] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/cinema.jpg")}
        style={styles.image}
      >
        <View style={{ marginTop: 180 }}>
          <TextInput
            style={styles.input}
            onChangeText={(title) => setTitle(title)}
            onSubmitEditing={() => {}}
            placeholder="Tytuł..."
          />
          <TextInput
            style={styles.input}
            onChangeText={(autor) => setAutor(autor)}
            onSubmitEditing={() => {}}
            placeholder="Autor..."
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              db.collection("movies")
                .add({
                  title: title,
                  autor: autor,
                  watched: route.params.watched,
                })
                .then((docRef) => {
                  console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                  console.error("Error adding document: ", error);
                });
              // db.collection("movies")
              //   .doc("7DhDwNrxKXtmqjk5wZS4")
              //   .delete()
              //   .then(() => {
              //     console.log("Document successfully deleted!");
              //   })
              //   .catch((error) => {
              //     console.error("Error removing document: ", error);
              //   });
              navigation.navigate("Home");
            }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>Dodaj film</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};
export default AddMovie;
