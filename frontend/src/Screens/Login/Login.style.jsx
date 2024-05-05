import { StyleSheet } from "react-native";
import Colors from "../../../Utils/Colors";

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  LoginContainer: {
    flex: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  LoginImage:{
    alignSelf:"center",
    width:100,
    height:100,
    marginTop:30
  },
  Loginheader: {
    fontSize: 25,
    marginTop:10,
    fontWeight: "500",
  },
  LoginNote: {
    fontSize: 15,
    color: Colors.gray,
    marginTop: 10,
  },
  LoginLabel: {
    fontSize: 15,
    color: Colors.black,
    marginTop: 20,
  },
  LoginInput: {
    borderColor: "#959595",
    borderWidth: .25,
    borderBottomWidth: 1.5,
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Forgetpass: {
    fontSize: 15,
    marginTop: 5,
    color: Colors.gray,
    textAlign:"right",
    fontWeight:"500"
  },
  LoginButton: {
    backgroundColor: Colors.primary,
    marginTop: 10,
    padding: 15,
    borderRadius: 10,
    Text: {
      color: Colors.white,
      fontSize: 20,
      fontWeight: 500,
      textAlign: "center",
      letterSpacing: 0.5,
    },
  },
});
