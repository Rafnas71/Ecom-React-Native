import React, { useState } from "react";
import {
  Text,
  StatusBar,
  ScrollView,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../Utils/Colors";
import { styles } from "../Login/Login.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../../../Firebaseconfig";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const {email, password } = userCredentials;
  const Nav = useNavigation();
  const handleLogin = () => {
    console.log("login");
    signInWithEmailAndPassword(Auth, email, password)
      .then((user) => {
        // Alert.alert("Signed In")
        console.log(user);
        Nav.navigate("Home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
   
  };
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
      <ScrollView>
        <Image
          style={styles.LoginImage}
          source={require("../../../assets/CartIcon.png")}
        />
        <View style={styles.LoginContainer}>
          <Text style={styles.Loginheader}>Sign In</Text>
          <Text style={styles.LoginLabel}>Email Address</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            maxLength={50}
            style={styles.LoginInput}
            value={email}
            onChangeText={(text) =>
              setUserCredentials({ ...userCredentials, email: text })
            }
          />
          <Text style={styles.LoginLabel}>Password</Text>
          <View style={styles.LoginInput}>
            <TextInput
              secureTextEntry={passVisible}
              maxLength={50}
              placeholder="Password"
              placeholderTextColor={Colors.gray}
              keyboardType="name-phone-pad"
              style={{ flex: 0.95 }}
              value={password}
              onChangeText={(text) =>
                setUserCredentials({ ...userCredentials, password: text })
              }
            />
            <Ionicons
              onPress={() => setPassVisible(!passVisible)}
              name={!passVisible ? "eye-outline" : "eye-off-outline"}
              size={24}
              color="black"
            />
          </View>
            <Text style={styles.Forgetpass}>Forget Password?</Text>
          <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
            <Text style={styles.LoginButton.Text}>Log In</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
              gap: 10,
            }}
          >
            <Text style={{ color: Colors.gray, fontSize: 15, fontWeight: 500 }}>
              Didn't Have an account yet?
            </Text>
            <Text
              style={{ color: Colors.primary, fontSize: 15, fontWeight: 700 }}
              onPress={() => Nav.navigate("Signup")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
