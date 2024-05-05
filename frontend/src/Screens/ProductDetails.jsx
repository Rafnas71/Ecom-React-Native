import React from "react";
import { Image, Text, ScrollView, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../Utils/Colors";
import ProductExtras from "../Components/ProductExtras";
import { FlatList } from "react-native-web";

const ProductDetails = () => {
  const nav = useNavigation();
  const route = useRoute();
  const productInfo = route.params.item;
  return (
    <SafeAreaView style={{ flex: 0.99}}>
      <View>
        <View
          style={{
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            backgroundColor: Colors.lightgray,
          }}
        >
          <Image
            resizeMode="contain"
            style={{
              height: 300,
            }}
            source={{
              uri: productInfo.img,
            }}
          />
        </View>

        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 10,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
          }}
        >
          <AntDesign
            name="left"
            size={30}
            color="black"
            onPress={() => nav.goBack()}
          />
          <Entypo name="share-alternative" size={30} color="black" />
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 ,paddingBottom:10}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "500" }}>
            {productInfo.name.charAt(0).toUpperCase() +
              productInfo.name.slice(1)}
          </Text>
          <AntDesign name="hearto" size={25} color="black" />
        </View>
        <View style={{ gap: 5, paddingVertical: 5 }}>
          <Text style={{ color: Colors.gray, fontSize: 15 }}>Per Kg</Text>
          <Text style={{ fontSize: 25, fontWeight: 600 }}>
            ₹ {productInfo.price}
          </Text>
        </View>
        {productInfo.extraInfo.map((info, index) => (
          <ProductExtras item={info} index={index} />
        ))}
      </ScrollView>
      <TouchableOpacity style={{height:70,width:"90%",borderRadius:10, backgroundColor:Colors.primary ,alignSelf:"center",justifyContent:"center",alignItems:"center",}}>
        <Text style={{fontSize:25,color:Colors.white,fontWeight:500,}}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ProductDetails;
