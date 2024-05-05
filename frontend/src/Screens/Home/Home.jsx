import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../Components/SearchBar";
import Colors from "../../../Utils/Colors";
import HomeBanner from "../../Components/HomeBanner";
import { productsData } from "../../../Utils/Data";
import ProductList from "../../Components/ProductList";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal:20,}}>
        <View style={{  gap:20,paddingVertical:10 }}>
          <SearchBar />
          <HomeBanner />
          {productsData.map((item, index) => (
            <ProductList key={index} title={item.title} products={item.products}/>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
