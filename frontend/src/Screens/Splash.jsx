import React, { useEffect } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const Nav = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      Nav.replace("Signup");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: Colors.primary,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <Text style={{ color: Colors.white, fontSize: 50, fontWeight: "bold" }}>
        QuickGo
      </Text>
      <Text style={{ color: Colors.white, fontSize: 10, fontWeight: "bold" }}>
        "Shop Local, Deliver Local, QuickGO"
      </Text>
    </View>
  );
};

export default Splash;
