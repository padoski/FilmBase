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
    flexDirection: "row",
    justifyContent: "space-between",
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginVertical: 10,
    width: 100,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginHorizontal: 20,
  },
});
export default styles;
