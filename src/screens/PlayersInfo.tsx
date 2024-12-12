import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";
import CustomButton from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainComponent";
import TabBarIcon from "../components/TabBarIcon";

import * as NavigationBar from "expo-navigation-bar";

type PlayersInfoProps = NativeStackScreenProps<
  RootStackParamList,
  "PlayersInfo"
>;

export default function PlayersInfo({ navigation }: PlayersInfoProps) {
  const [player1name, setPlayer1name] = useState("");
  const [player2name, setPlayer2name] = useState("");

  // NavigationBar.setBackgroundColorAsync("whitesmoke");
  // NavigationBar.setButtonStyleAsync("dark");

  return (
    <>
      <StatusBar backgroundColor={"#FFFFFF"} barStyle={"dark-content"} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF", justifyContent: 'space-between' }}>
          <View style={styles.headingTit}>
            <Text style={styles.headingText}>Tic Tac Toe</Text>
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
              // flex: 1,
              // backgroundColor: "red",
              justifyContent: "center",
              // marginTop: 120
              
            }}
          >
            <View style={styles.playersInputView}>
              <Text
                style={{
                  color: "crimson",
                  // color: "#193088",
                  textAlign: "center",
                  fontFamily: "Dosis_700Bold",
                  fontSize: 18,
                  margin: 5,
                }}
              >
                Enter player 1 name
              </Text>
              <TextInput
                style={styles.inputBar}
                underlineStyle={{ display: "none" }}
                value={player1name}
                onChangeText={setPlayer1name}
                maxLength={10}
                label={
                  <Text
                    style={{
                      color: "gray",
                      // color: "#193088",
                      textAlign: "center",
                      fontFamily: "Dosis_400Regular",
                    }}
                  >
                    Player 1 name...
                  </Text>
                }
                placeholderTextColor={"gainsboro"}
                outlineStyle={{
                  borderWidth: 0,
                  borderRadius: 15,
                  // borderTopRightRadius: 0,
                  // borderBottomRightRadius: 0,
                  margin: 0,
                  padding: 0,
                }}
                mode="outlined"
                cursorColor="crimson"
                contentStyle={{
                  fontFamily: "Dosis_400Regular",
                //   color: "#193088",
                }}
              />
              <Text
                style={{
                  color: "crimson",
                  // color: "#193088",
                  textAlign: "center",
                  fontFamily: "Dosis_700Bold",
                  fontSize: 18,
                  margin: 5,
                }}
              >
                Enter player 2 name
              </Text>
              <TextInput
                style={styles.inputBar}
                underlineStyle={{ display: "none" }}
                value={player2name}
                onChangeText={setPlayer2name}
                maxLength={10}
                label={
                  <Text
                    style={{
                      color: "gray",
                      // color: "#193088",
                      textAlign: "center",
                      fontFamily: "Dosis_400Regular",
                    }}
                  >
                    Player 2 name...
                  </Text>
                }
                placeholderTextColor={"gainsboro"}
                outlineStyle={{
                  borderWidth: 0,
                  borderRadius: 15,
                  // borderTopRightRadius: 0,
                  // borderBottomRightRadius: 0,
                  margin: 0,
                  padding: 0,
                }}
                mode="outlined"
                cursorColor="crimson"
                contentStyle={{
                  fontFamily: "Dosis_400Regular",
                //   color: "crimson",
                }}
              />
              <CustomButton
                name="Go !"
                bgColor="crimson"
                pressedColor="#b80b2e"
                onClick={() => {
                  navigation.navigate("GameScreen", {
                    player1: player1name,
                    player2: player2name,
                  });
                }}
                borRadius={10}
                customStyle={{}}
              />
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate("GameScreen");
                }}
                style={{marginTop: 5}}
              >
                <Text
                  style={{
                    color: "crimson",
                    fontFamily: "Dosis_700Bold",
                    fontSize: 20,
                  }}
                >
                  Skip{" "}
                  <TabBarIcon name="arrowRight" size={20} color="crimson" />{" "}
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={{ backgroundColor: "whitesmoke", width: '100%' }}>
            <Text
              style={{
                // color: "crimson",
                // color: "#193088",
                textAlign: "center",
                fontFamily: "Dosis_400Regular",
                fontSize: 20,
                margin: 15,
              }}
            >
              Play with friends...{" "}
              <TabBarIcon name="smileO" size={25} color="#000000" />
            </Text>
            <Text
              style={{
                color: "crimson",
                // color: "#193088",
                textAlign: "center",
                fontFamily: "Dosis_700Bold",
                fontSize: 17,
                margin: 15,
                // textDecorationLine: 'underline'
              }}
            >
              -: Mini Project by Krish Khare :-
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
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
  headingText: {
    fontSize: 25,
    fontWeight: "600",
    color: "crimson",
    textAlign: "center",
    fontFamily: "Dosis_700Bold",
  },
  playersInputView: {
    // backgroundColor: "#FFFFFF",
    backgroundColor: "whitesmoke",
    borderRadius: 30,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 50,
    // width: "100%",
    width: "90%",
  },
  inputBar: {
    borderRadius: 15,
    // backgroundColor: "whitesmoke",
    backgroundColor: "white",
    borderColor: "whitesmoke",
    width: 250,
    color: "crimson",
    marginHorizontal: "auto",
    fontSize: 21,
    marginBottom: 10,
    fontFamily: "Dosis_400Regular",
  },
});
