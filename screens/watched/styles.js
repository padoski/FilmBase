import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#f15354",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
    alignItems: "center",
    // justifyContent: "center",
  },
});
export default styles;
