import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";
import { Avatar, ListItem } from "react-native-elements";

const Item = ({ title, autor }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{autor}</Text>
    </View>
    <View style={{ flexDirection: "row" }}>
      <AntDesign
        name="delete"
        size={30}
        color="black"
        style={{ marginRight: 5 }}
      />
      <AntDesign name="edit" size={30} color="black" />
    </View>
  </View>
);
const Watched = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const moviesRef = db.collection("movies");
    moviesRef.where("watched", "==", true).onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.docs.forEach((doc) => {
        data.push({
          id: doc.id,
          title: doc.data().title,
          autor: doc.data().autor,
        });
      });
      setData(data);
      console.log(data);
    });
    // db.collection("movies")
    //   .where("watched", "==", false)
    //   .get()
    //   .then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //       setData({
    //         id: doc.id,
    //         title: doc.data().title,
    //         autor: doc.data().autor,
    //         watched: doc.data().watched,
    //       });
    //       console.log(doc.id),
    //         console.log(doc.data().title),
    //         console.log(doc.data().autor),
    //         console.log(doc.data().watched),
    //         console.log(`${doc.id} => ${doc.data().title}`);
  }, []);
  // useEffect(() => {
  //   db.collection("movies")
  //     .where("watched", "==", true)
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         data.push({
  //           id: doc.id,
  //           title: doc.data().title,
  //           autor: doc.data().autor,
  //           watched: doc.data().watched,
  //         });
  //         console.log(`${doc.id} => ${doc.data().title}`);
  //       });
  //     });
  //   console.log(data);
  // }, []);
  const renderItem = ({ item }) => (
    <Item title={item.title} autor={item.autor} />
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddMovie", { watched: true });
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>Dodaj film</Text>
      </Pressable>
      <ScrollView>
        {data.map((movie) => {
          return (
            <ListItem
              key={movie.id}
              bottomDivider
              onPress={() =>
                navigation.navigate("MovieDetailsScreen", {
                  movieId: movie.id,
                })
              }
            >
              <ListItem.Chevron />
              <Avatar
                rounded
                source={{
                  uri: "https://img.pngio.com/download-for-free-10-png-movie-icon-png-top-images-at-carlisle-film-icon-png-920_961.png",
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{movie.title}</ListItem.Title>
                <ListItem.Subtitle>{movie.autor}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Watched;
