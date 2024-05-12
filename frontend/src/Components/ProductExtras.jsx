import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";

const ProductExtras = ({ item, index }) => {
  const [toggle, setToggle] = useState(false);
  const [infoIndex, setInfoIndex] = useState(null);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setToggle(!toggle);
          setInfoIndex(index);
        }}
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          borderBottomColor: Colors.lightgray,
          borderBottomWidth: 2,
          paddingVertical: 10,
        }}
      >
        <Text style={{ fontSize: 25 }}>{item.title}</Text>
        <AntDesign name="down" size={20} color="black" />
      </TouchableOpacity>
      {toggle && infoIndex === index && <Text style={{fontSize:15}}>{item.details}</Text>}
    </View>
  );
};

export default ProductExtras;
