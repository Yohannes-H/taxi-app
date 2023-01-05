import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
const data = [
  {
    id: 123,
    title: "Get a ride",
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_537/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png",
    screen: "MapScreen",
  },
  {
    id: 456,
    title: "Order food",
    image:
      "https://media.istockphoto.com/id/1280158821/photo/diverse-keto-dishes.jpg?b=1&s=170667a&w=0&k=20&c=IsvvmxUGvo1MOmW2hlzTQ9MiHtgk7jwggRrZOm6xAOs=",
    screen: "EatsScreen",
  },
];
//TODO: screens to be implemented in future
const NavOptions = () => {
  const navigation = useNavigation(); //navigation prop can also be used

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
