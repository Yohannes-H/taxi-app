import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={tw`text-red-500 p-10`}>HomeScreen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
