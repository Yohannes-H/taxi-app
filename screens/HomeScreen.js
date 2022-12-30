import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500 p-10`}>HomeScreen time: 4:09</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
