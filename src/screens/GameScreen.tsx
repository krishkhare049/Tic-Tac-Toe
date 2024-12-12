import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Pressable,
  Dimensions,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import TextStyleDot from "../components/TextStyleDot";
import * as NavigationBar from "expo-navigation-bar";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../MainComponent";
import TabBarIcon from "../components/TabBarIcon";
import { Surface } from "react-native-paper";

type GameScreenProps = NativeStackScreenProps<RootStackParamList, "GameScreen">;

export default function GameScreen({ route }: GameScreenProps) {
  NavigationBar.setBackgroundColorAsync("crimson");
  NavigationBar.setButtonStyleAsync("light");

  useEffect(() => {
    // Set the status bar color when the component mounts
    StatusBar.setBackgroundColor("crimson");
    StatusBar.setBarStyle("light-content");

    // Optionally, you can add a listener for orientation changes
    const handleOrientationChange = () => {
    StatusBar.setBackgroundColor("crimson");
    StatusBar.setBarStyle("light-content");
    };

    // Add event listener for orientation changes
    const subscription = Dimensions.addEventListener('change', handleOrientationChange);

    // Cleanup the event listener on unmount
    return () => {
      subscription?.remove();
    };
  }, []);

  const { player1, player2 } = route.params || {
    player1: "",
    player2: "",
  };

  const [turn, setTurn] = useState("O");

  const [isGameEnd, setIsGameEnd] = useState(false);
  const [winner, setWinner] = useState("");

  const [tick1, setTick1] = useState("*");
  const [tick2, setTick2] = useState("*");
  const [tick3, setTick3] = useState("*");
  const [tick4, setTick4] = useState("*");
  const [tick5, setTick5] = useState("*");
  const [tick6, setTick6] = useState("*");
  const [tick7, setTick7] = useState("*");
  const [tick8, setTick8] = useState("*");
  const [tick9, setTick9] = useState("*");

  const refT1 = useRef(null);
  const refT2 = useRef(null);
  const refT3 = useRef(null);
  const refT4 = useRef(null);
  const refT5 = useRef(null);
  const refT6 = useRef(null);
  const refT7 = useRef(null);
  const refT8 = useRef(null);
  const refT9 = useRef(null);

  useEffect(() => {
    checkEnd();
  }, [tick1, tick2, tick3, tick4, tick5, tick6, tick7, tick8, tick9]);

  const clickTick = (setFunc: Function) => {
    if (isGameEnd) {
      return;
    }

    setFunc(turn);

    if (turn === "O") {
      setTurn("X");
    } else {
      setTurn("O");
    }

    // checkEnd()
  };

  const checkEnd = () => {
    if (
      (tick1 === "X" && tick2 === "X" && tick3 === "X") ||
      (tick1 === "X" && tick4 === "X" && tick7 === "X") ||
      (tick1 === "X" && tick5 === "X" && tick9 === "X") ||
      (tick3 === "X" && tick5 === "X" && tick7 === "X") ||
      (tick3 === "X" && tick6 === "X" && tick9 === "X") ||
      (tick2 === "X" && tick5 === "X" && tick8 === "X") ||
      (tick4 === "X" && tick5 === "X" && tick6 === "X") ||
      (tick7 === "X" && tick8 === "X" && tick9 === "X")
    ) {
      // setTurn('X wins')

      setIsGameEnd(true);
      setWinner("X");
    } else if (
      (tick1 === "O" && tick2 === "O" && tick3 === "O") ||
      (tick1 === "O" && tick4 === "O" && tick7 === "O") ||
      (tick1 === "O" && tick5 === "O" && tick9 === "O") ||
      (tick3 === "O" && tick5 === "O" && tick7 === "O") ||
      (tick3 === "O" && tick6 === "O" && tick9 === "O") ||
      (tick2 === "O" && tick5 === "O" && tick8 === "O") ||
      (tick4 === "O" && tick5 === "O" && tick6 === "O") ||
      (tick7 === "O" && tick8 === "O" && tick9 === "O")
    ) {
      setIsGameEnd(true);
      setWinner("O");
    } else if (
      tick1 != "*" &&
      tick2 != "*" &&
      tick3 != "*" &&
      tick4 != "*" &&
      tick5 != "*" &&
      tick6 != "*" &&
      tick7 != "*" &&
      tick8 != "*" &&
      tick9 != "*"
    ) {
      setIsGameEnd(true);
      setWinner("draw");
    }
  };

  const refreshGame = () => {
    setIsGameEnd(false);
    setWinner("");
    setTurn("O");

    setTick1("*");
    setTick2("*");
    setTick3("*");
    setTick4("*");
    setTick5("*");
    setTick6("*");
    setTick7("*");
    setTick8("*");
    setTick9("*");
  };

  function ShowWinner() {
    if (winner == "X" || winner == "O") {
      if (winner === "O") {
        return (
          <Text
            style={{
              fontSize: 23,
              // fontWeight: "600",
              fontFamily: "Dosis_700Bold",

              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "royalblue",
              margin: "auto",
              padding: 5,
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 5,
              width: 270,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TabBarIcon name="party-popper" size={30} color="royalblue" />{" "}
            {player1 !== "" ? player1 + " wins!" : "O won the game!"}
          </Text>
        );
      } else {
        return (
          <Text
            style={{
              fontSize: 23,
              // fontWeight: "600",
              fontFamily: "Dosis_700Bold",

              textAlign: "center",
              backgroundColor: "#FFFFFF",
              color: "royalblue",
              margin: "auto",
              padding: 5,
              borderRadius: 5,
              borderColor: "white",
              borderWidth: 5,
              width: 220,
            }}
          >
            <TabBarIcon name="party-popper" size={30} color="royalblue" />{" "}
            {player2 !== "" ? player2 + " wins!" : "X won the game!"}
          </Text>
        );
      }
    } else if (winner == "draw") {
      return (
        <Text
          style={{
            fontSize: 25,
            // fontWeight: "600",
            fontFamily: "Dosis_700Bold",

            textAlign: "center",
            backgroundColor: "yellow",
            margin: "auto",
            padding: 5,
            borderRadius: 5,
            borderColor: "white",
            borderWidth: 5,
            width: 200,
          }}
        >
          Draw match
        </Text>
      );
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "crimson", height: "100%" }}>
      <StatusBar backgroundColor={"crimson"} barStyle={"light-content"} />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
        }}
      >
        {!isGameEnd ? (
          <View
            style={
              turn === "O"
                ? [
                    styles.turnText,
                    {
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: 180,
                      backgroundColor: "royalblue",
                      borderRadius: 50,
                    },
                  ]
                : [
                    styles.turnText,
                    {
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: 180,
                      backgroundColor: "orange",
                      borderRadius: 50,
                    },
                  ]
            }
          >
            <FontAwesome name="user" size={24} color="white" />
            {turn === "O" ? (
              <Text
                style={[
                  styles.turnText,
                  {
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    backgroundColor: "transparent",
                  },
                ]}
              >
                {/* Player O turn */}
                {player1 !== "" ? player1 : "Player O turn"}
              </Text>
            ) : (
              <Text
                style={[
                  styles.turnText,
                  {
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    backgroundColor: "transparent",
                  },
                ]}
              >
                {/* Player X turn */}
                {player2 !== "" ? player2 : "Player X turn"}
              </Text>
            )}
          </View>
        ) : (
          <View
            style={[
              styles.turnText,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: 180,
                backgroundColor: "green",
                borderRadius: 50,
              },
            ]}
          >
            <FontAwesome name="user" size={24} color="white" />
            <Text
              style={[
                styles.turnText,
                {
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  backgroundColor: "transparent",
                },
              ]}
            >
              Game ended!
            </Text>
          </View>
        )}

        {/* <View
          style={
            turn === "O"
              ? [
                  styles.turnText,
                  {
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: 180,
                    backgroundColor: "royalblue",
                    borderRadius: 50,
                  },
                ]
              : [
                  styles.turnText,
                  {
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: 180,
                    backgroundColor: "orange",
                    borderRadius: 50,
                  },
                ]
          }
        >
          <FontAwesome name="user" size={24} color="white" />
          {turn === "O" ? (
            <Text
              style={[
                styles.turnText,
                {
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  backgroundColor: "transparent",
                },
              ]}
            >
              {player1 !== "" ? player1 : "Player O turn"}
            </Text>
          ) : (
            <Text
              style={[
                styles.turnText,
                {
                  paddingHorizontal: 0,
                  paddingVertical: 0,
                  backgroundColor: "transparent",
                },
              ]}
            >
              {player2 !== "" ? player2 : "Player X turn"}
            </Text>
          )}
        </View> */}
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Pressable
            onPress={refreshGame}
            android_ripple={{ color: "#f76f8b" }}
            style={[
              // styles.turnText,
              {
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                borderRadius: 10,
              },
            ]}
          >
            <View
              style={[
                styles.turnText,
                {
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: "transparent",
                  marginVertical: 0,
                },
              ]}
            >
              <Ionicons name="refresh" size={24} color="crimson" />
              <Text
                style={[
                  styles.turnText,
                  {
                    color: "crimson",
                    // backgroundColor: "#FFFFFF",
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    backgroundColor: "transparent",
                  },
                ]}
              >
                Restart
              </Text>
            </View>
          </Pressable>
        </View>
      </View>

      <Surface elevation={5} style={styles.container}>
        <View
          style={{
            borderTopLeftRadius: 25,
            borderBottomRightRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderTopLeftRadius: 25, borderBottomRightRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick1)}
            ref={refT1}
            disabled={
              tick1 === "X" || tick1 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick1} />
          </Pressable>
        </View>

        <View
          style={{
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderBottomRightRadius: 20, borderBottomLeftRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick2)}
            ref={refT2}
            disabled={
              tick2 === "X" || tick2 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick2} />
          </Pressable>
        </View>

        <View
          style={{
            borderTopRightRadius: 25,
            borderBottomLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderTopRightRadius: 25, borderBottomLeftRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick3)}
            ref={refT3}
            disabled={
              tick3 === "X" || tick3 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick3} />
          </Pressable>
        </View>

        <View
          style={{
            borderTopRightRadius: 20, borderBottomRightRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderTopRightRadius: 20, borderBottomRightRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick4)}
            ref={refT4}
            disabled={
              tick4 === "X" || tick4 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick4} />
          </Pressable>
        </View>

        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              {
                borderRadius: 20,
              },
            ]}
            android_ripple={{ color: "whitesmoke" }}
            onPress={() => clickTick(setTick5)}
            ref={refT5}
            disabled={
              tick5 === "X" || tick5 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick5} />
          </Pressable>
        </View>

        <View
          style={{
            borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderTopLeftRadius: 20, borderBottomLeftRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick6)}
            ref={refT6}
            disabled={
              tick6 === "X" || tick6 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick6} />
          </Pressable>
        </View>

        <View
          style={{
            borderBottomLeftRadius: 25, borderTopRightRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderBottomLeftRadius: 25, borderTopRightRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick7)}
            ref={refT7}
            disabled={
              tick7 === "X" || tick7 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick7} />
          </Pressable>
        </View>

        <View
          style={{
            borderTopRightRadius: 20, borderTopLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderTopRightRadius: 20, borderTopLeftRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick8)}
            ref={refT8}
            disabled={
              tick8 === "X" || tick8 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick8} />
          </Pressable>
        </View>

        <View
          style={{
            borderBottomRightRadius: 25, borderTopLeftRadius: 20,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={[
              styles.tickBox,
              { borderBottomRightRadius: 25, borderTopLeftRadius: 20 },
            ]}
            android_ripple={{ color: "#f2f76f" }}
            onPress={() => clickTick(setTick9)}
            ref={refT9}
            disabled={
              tick9 === "X" || tick9 === "O" || isGameEnd ? true : false
            }
          >
            <TextStyleDot tick={tick9} />
          </Pressable>
        </View>
      </Surface>

      <ShowWinner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  turnText: {
    fontSize: 18,
    fontFamily: "Dosis_700Bold",
    backgroundColor: "black",
    color: "white",
    paddingHorizontal: 10,
    paddingVertical: 5,
    // margin: 15,
    textAlign: "center",
    borderRadius: 4,
    marginVertical: 10,
  },

  container: {
    // borderWidth: 0.5,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    // height: 400,
    margin: 5,
    backgroundColor: "white",
    borderRadius: 25,
    paddingVertical: 35,
    // maxWidth: 400
    width: 380,
    height: 380,
  },
  tickBox: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderColor: "gainsboro",
    // margin: 1,
    backgroundColor: "#eaeaea",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
