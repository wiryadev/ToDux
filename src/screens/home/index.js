import React from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar } from "react-native-paper";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate("")}
        />
      </Appbar.Header>
      <FlatList
        data={[]}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, padding: 32, alignItems: 'center' }}>
            <Text>Data is Empty</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;