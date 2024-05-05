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
import styles from "./Signup.style";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Auth, db } from "../../../Firebaseconfig";
import { doc, setDoc } from "firebase/firestore";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const [passVisible, setPassVisible] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = userCredentials;
  const Nav = useNavigation();

  const handleSignup = () => {
    console.log("signupfn");
    if (!email || !password) {
      Alert.alert("Please fill in all fields.");
      return;
    }
    createUserWithEmailAndPassword(Auth, email, password)
      .then((val) => {
        setDoc(doc(db, "users", Auth.currentUser.uid), {
          name: name,
          email: email,
          uid: Auth.currentUser.uid,
        });
        // Alert.alert("User account created & signed in!");

        Nav.navigate("Login");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }
      });
  };
  return (
    <SafeAreaView style={styles.Container}>
      <StatusBar backgroundColor={Colors.secondary} barStyle="dark-content" />

      <ScrollView>
        <Image
          style={styles.SignupImage}
          source={require("../../../assets/CartIcon.png")}
        />
        <View style={styles.SignupContainer}>
          <Text style={styles.Signupheader}>Signup</Text>
          <Text style={styles.SignupNote}>
            Enter your credentials to continue
          </Text>
          <Text style={styles.SignupLabel}>Email Address</Text>
          <TextInput
            placeholder="Email"
            keyboardType="email-address"
            maxLength={50}
            style={styles.SignupInput}
            value={email}
            onChangeText={(text) =>
              setUserCredentials({ ...userCredentials, email: text })
            }
          />
          <Text style={styles.SignupLabel}>Username</Text>
          <TextInput
            placeholder="Username"
            value={name}
            maxLength={15}
            onChangeText={(text) =>
              setUserCredentials({ ...userCredentials, name: text })
            }
            keyboardType="name-phone-pad"
            style={styles.SignupInput}
          />
          <Text style={styles.SignupLabel}>Password</Text>
          <View style={styles.SignupInput}>
            <TextInput
              secureTextEntry={passVisible}
              maxLength={50}
              placeholder="Password"
              placeholderTextColor={Colors.primary}
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
          <Text style={styles.SignupTerms}>
            By continuing you agree to our Terms of Service and Privacy Policy
          </Text>
          <TouchableOpacity style={styles.SignupButton} onPress={handleSignup}>
            <Text style={styles.SignupButton.Text}>Sign Up</Text>
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
              Already have an Account?
            </Text>
            <Text
              style={{ color: Colors.primary, fontSize: 15, fontWeight: 700 }}
              onPress={() => Nav.navigate("Login")}
            >
              Login Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
