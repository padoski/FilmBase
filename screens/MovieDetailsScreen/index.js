import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";

import { Button, Input, Text } from "react-native-elements";
import { Switch } from "react-native-paper";
import styles from "./styles";
import { db } from "../../firebase";
import { useNavigation, useRoute } from "@react-navigation/native";

const MovieDetailsScreen = (props) => {
  const navigation = useNavigation();
  const initialState = {
    title: "",
    autor: "",
    id: "",
    watched: true,
  };
  const [movie, setMovie] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => {
    console.log(isSwitchOn);
    setIsSwitchOn(!isSwitchOn);
    console.log(isSwitchOn);
    movie.watched = isSwitchOn;
    console.log(movie.watched);
  };

  const getMovieById = async (id) => {
    const dbRef = db.collection("movies").doc(id);
    const doc = await dbRef.get();
    const movie = doc.data();

    setMovie({
      ...movie,
      id: doc.id,
    });
    setLoading(false);
    setIsSwitchOn(movie.watched);
  };

  useEffect(() => {
    getMovieById(props.route.params.movieId).then((r) => console.log(r));
    setMovie(movie);
  }, []);

  const handleChangeText = (name, value) => {
    setMovie({ ...movie, [name]: value });
  };

  const deleteMovie = async () => {
    const dbRef = db.collection("movies").doc(props.route.params.movieId);
    await dbRef.delete();
    props.navigation.navigate("Home");
  };
  useEffect(() => {
    movie.watched = isSwitchOn;
  }, [isSwitchOn]);

  const updateMovie = async () => {
    const dbRef = db.collection("movies").doc(movie.id);
    await dbRef.set({
      title: movie.title,
      autor: movie.autor,
      watched: movie.watched,
    });
    console.log(movie.watched);
    setMovie(initialState);
    navigation.navigate("Home");
  };

  const openConfirmationAlert = () => {
    Alert.alert("Chesz usunać film?", "Na pewno ?", [
      { text: "Tak", onPress: () => deleteMovie() },
      { text: "Nie", onPress: () => console.log("No") },
    ]);
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          value={movie.title}
          placeholder="Tytuł"
          onChangeText={(value) => handleChangeText("title", value)}
        />

        <Input
          value={movie.autor}
          placeholder="Autor"
          onChangeText={(value) => handleChangeText("autor", value)}
        />

        <Text>Widziane</Text>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          style={styles.switch}
        />
      </View>
      <Button
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: "#fb9327" }}
        title="Update'uj film"
        onPress={() => updateMovie()}
      />

      <Button
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: "red" }}
        title="Usuń film"
        onPress={() => openConfirmationAlert()}
      />
    </SafeAreaView>
  );
};

export default MovieDetailsScreen;
