import React from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar, Avatar, Card, IconButton, TouchableRipple, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo } from "../../redux/actions/ToDuxAction";

const HomeScreen = ({ navigation }) => {

  const theme = useTheme()

  const todos = useSelector((state) => state.todux.todos)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.Content
          title="Home"
        />
        <Appbar.Action
          icon="plus"
          onPress={() => navigation.navigate('FormScreen')}
        />
      </Appbar.Header>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, padding: 32, alignItems: 'center' }}>
            <Text>Data is Empty</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableRipple
            style={{ padding: 12 }}
            onPress={() => navigation.navigate("FormScreen", {
              id: item.id,
              type: "edit"
            })}
          >
            <Card
              mode="elevated"
              style={{
                borderRadius: 16
              }}
            >
              <Card.Title
                title={item.title ?? ''}
                titleStyle={{
                  fontWeight: 'bold',
                  fontSize: 18,
                }}
                subtitle={item.desc ?? ''}
                subtitleVariant="bodyMedium"
                left={(props) =>
                  <Avatar.Icon {...props} 
                  icon="note" 
                  />
                }
                right={(props) =>
                  <IconButton {...props} 
                  icon="delete" 
                  onPress={() => { dispatch(deleteToDo(item.id)) }} 
                  />
                }
              />
            </Card>
          </TouchableRipple>
        )}
      />
    </View>
  );
};

export default HomeScreen;