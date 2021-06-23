import { StyleSheet, StatusBar } from "react-native";
const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    width: 300,
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    fontSize: 18,
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
    alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    backgroundColor: "#f15354",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 50,
  },
});
export default styles;
