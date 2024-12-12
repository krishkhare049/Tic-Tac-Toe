import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import TabBarIcon from "../components/TabBarIcon";

// import * as NavigationBar from "expo-navigation-bar";

//   NavigationBar.setBackgroundColorAsync("#fdbe00");
// NavigationBar.setVisibilityAsync("hidden");

// export default function SplashScreen({onAnimationEnd}: { onAnimationEnd: () => void}) {
export default function SplashScreen() {
  // const opacity = new Animated.Value(1); // Initial opacity

  // useEffect(() => {
  //   Animated.timing(opacity, {
  //     toValue: 0, // Fade out to transparent

  //     duration: 500, // Duration of the animation

  //     useNativeDriver: true, // Use native driver for better performance
  //   }).start(() => {
  //     onAnimationEnd(); // Call the callback function after animation ends
  //   });
  // }, [opacity, onAnimationEnd]);

  return (
    <>
      <StatusBar backgroundColor={"crimson"} barStyle={"light-content"} />
      {/* <Animated.View style={[styles.container, { opacity }]}> */}
      <View
        style={{
          flex: 1,
          backgroundColor: "crimson",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={styles.img}
            source={require("../assets/tictactoe.jpg")}
          />
          <View style={styles.headingTit}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "600",
                color: "crimson",
                textAlign: "center",
                fontFamily: "Dosis_700Bold",
              }}
            >
              Tic Tac Toe
            </Text>
            <Text
              style={{
                backgroundColor: "crimson",
                textAlign: "center",
                borderRadius: 5,
                color: "#FFFFFF",
                fontSize: 19,
                paddingHorizontal: 5,
              }}
            >
              O | X
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              // backgroundColor: 'green'
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontFamily: "Dosis_700Bold",
                fontSize: 20,
              }}
            >
              by krish khare{"  "}
            </Text>

            <View style={{ width: 30 }}>
              <TabBarIcon
                name="gamepad-circle-down"
                size={30}
                color={"#FFFFFF"}
              />
            </View>
          </View>
        </View>
      </View>
      {/* </Animated.View> */}
    </>
  );
}

const styles = StyleSheet.create({
  img: {
    // width: "100%",
    width: 100,
    height: 100,
  },
  headingTit: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 15,
    textAlign: "center",
    width: 250,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "crimson",
  },
  headingText: {},
});
