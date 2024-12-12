import React from "react";
import MainComponent from "./MainComponent"; // Your main component
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
      <PaperProvider>
        <MainComponent />
      </PaperProvider>
  );
}
