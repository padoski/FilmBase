import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Pressable,
  Modal,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { db } from "../../firebase";
import { Avatar, ListItem } from "react-native-elements";

const UnWatched = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const moviesRef = db.collection("movies");
    moviesRef.where("watched", "==", false).onSnapshot((querySnapshot) => {
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
        <AntDesign
          name="edit"
          size={30}
          color="black"
          style={{ marginRight: 5 }}
        />
        <Pressable
          onPress={() => {
            console.warn("Obejrzales");
            setModalVisible(true);
            // console.log(data);
          }}
        >
          <AntDesign name="checkcircle" size={24} color="white" />
        </Pressable>
      </View>
    </View>
  );
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => (
    <Item title={item.title} autor={item.autor} />
  );
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("AddMovie", { watched: false });
          console.log(data);
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
export default UnWatched;
