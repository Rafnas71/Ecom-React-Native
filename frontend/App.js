import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/Screens/Splash";
import Login from "./src/Screens/Login/Login.jsx";
import Signup from "./src/Screens/Signup/Signup.jsx";
import Home from "./src/Screens/Home/Home.jsx";
import ProductDetails from "./src/Screens/ProductDetails.jsx";
import Cart from "./src/Screens/Cart.jsx";


const Stack = createNativeStackNavigator();
const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Cart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
