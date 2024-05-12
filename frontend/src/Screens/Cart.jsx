import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../Utils/Colors";
import { EvilIcons } from "@expo/vector-icons";

const Cart = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 15,
          borderBottomColor: Colors.lightgray,
          borderBottomWidth: 3,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 35, letterSpacing: 2 }}>Cart</Text>
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            height: responsiveHeight(18),
            flexDirection: "row",
            borderBottomColor: Colors.lightgray,
            borderBottomWidth: 3,
            gap: 10,
          }}
        >
          <View
            style={{
              flex: 0.3,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                height: "90%",
                width: "95%",
                borderRadius: 10,
                borderWidth: 2,
                overflow: "hidden",
                borderColor: Colors.lightgray,
              }}
            >
              <Image
                resizeMode="cover"
                style={{
                  height: "100%",
                  width: "100%",
                }}
                source={{
                  uri: "https://t3.ftcdn.net/jpg/01/76/97/96/240_F_176979696_hqfioFYq7pX13dmiu9ENrpsHZy1yM3Dt.jpg",
                }}
              />
            </View>
          </View>
          <View style={{ flex: 0.7 ,paddingHorizontal:10,paddingVertical:10}}>
            <View style={{ flexDirection: "row" ,justifyContent:"space-between"}}>
              <Text style={{ fontSize: 20 ,fontWeight:500}}>Apple</Text>
              <EvilIcons name="close" size={25} color="black" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Cart;
