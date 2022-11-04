import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Appbar, Avatar, Card, FAB, IconButton, TouchableRipple, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo } from "../../redux/actions/ToDuxAction";

const HomeScreen = ({ navigation }) => {

  const theme = useTheme()

  const todos = useSelector((state) => state.todux.todos)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header
        style={{ backgroundColor: theme.colors.primaryContainer }}
      >
        <Appbar.Content
          title="Home"
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
              todo: item
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
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("FormScreen")}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})