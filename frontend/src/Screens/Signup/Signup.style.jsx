import { StyleSheet } from "react-native";
import Colors from "../../../Utils/Colors";

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  SignupContainer: {
    flex: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  SignupImage:{
    alignSelf:"center",
    width:100,
    height:100,
    marginTop:30
  },
  Signupheader: {
    fontSize: 25,
    marginTop:10,
    fontWeight: "500",
  },
  SignupNote: {
    fontSize: 15,
    color: Colors.gray,
    marginTop: 10,
  },
  SignupLabel: {
    fontSize: 15,
    color: Colors.black,
    marginTop: 20,
  },
  SignupInput: {
    borderColor: "#959595",
    borderWidth: .5,
    borderBottomWidth: 2,
    marginTop: 10,
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SignupTerms: {
    fontSize: 15,
    marginTop: 15,
    letterSpacing: 0.5,
    color: Colors.gray,
    width: "95%",
  },
  SignupButton: {
    backgroundColor: Colors.primary,
    marginTop: 20,
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

export default styles;
