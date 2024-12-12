import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import TabBarIcon from "./TabBarIcon";

type TickProps = PropsWithChildren<{
  tick: string;
}>;

const TextStyleDot = ({ tick }: TickProps) => {
  if (tick === "O") {
    return (
      <Text
        style={{
          fontSize: 50,
          fontWeight: "900",
          color: "royalblue",
          fontFamily: "Dosis_700Bold",
        }}
      >
        O
      </Text>
    );
  } else if (tick === "X") {
    return (
      <Text
        style={{
          fontSize: 50,
          fontWeight: "900",
          color: "orange",
          fontFamily: "Dosis_700Bold",
        }}
      >
        X
      </Text>
    );
  } else {
    return (
      // <Text
      //   style={{
      //     fontSize: 50,
      //     fontWeight: "900",
      //     color: "#000000",
      //   }}
      // >
      //   *
      // </Text>
      <TabBarIcon name="staro" size={25} color="#000000" />
    );
  }

  //   return (
  //     <View>
  //       <Text>TextStyleDot</Text>
  //     </View>
  //   )
};

export default TextStyleDot;

const styles = StyleSheet.create({});
