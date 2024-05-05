import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Colors from "../../Utils/Colors";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductList = ({ title, products }) => {
  const nav=useNavigation()
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 20 }}>{title}</Text>
        <Text style={{ color: Colors.primary, fontWeight: 500, fontSize: 15 }}>
          See all
        </Text>
      </View>
      <View>
        <FlatList
          horizontal
          data={products}
          renderItem={({ item, index }) => (
            <TouchableOpacity
            onPress={()=>nav.navigate('ProductDetails',{item})}
              activeOpacity={0.8}
              style={{
                marginRight: 10,
                marginTop: 15,
                width: responsiveWidth(45),
                height: responsiveHeight(30),
                borderColor: "#e3e3e3",
                borderWidth: 2,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.img }}
                resizeMode="contain"
                style={{ height: 120, width: "100%", alignSelf: "center" }}
              />
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 18, fontWeight: 500 }}>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </Text>
                <Text style={{ color: "gray" }}>Per Kg</Text>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginTop: 10,
                  }}
                >
                  <Text style={{ fontSize: 20, fontWeight: 500 }}>
                    ₹{item.price}
                  </Text>
                  <Entypo
                    name="circle-with-plus"
                    size={35}
                    color={Colors.primary}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
    </View>
  );
};

export default ProductList;
