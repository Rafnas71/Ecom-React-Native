import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { responsiveHeight } from "react-native-responsive-dimensions";

const SearchBar = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        height: responsiveHeight(6.5),
        backgroundColor: "#ededed",
        borderRadius: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Feather name="search" size={24} color="black"/>
      <TextInput placeholder="Search Store" style={{flex:1  }}/>
    </View>
  );
};

export default SearchBar;
