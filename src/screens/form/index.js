import { useCallback, useState } from "react"
import { Alert, View } from "react-native"
import { Appbar, Button, TextInput, useTheme } from "react-native-paper"
import { useDispatch } from "react-redux"
import Spacer from "../../components/Spacer"
import { addToDo, deleteToDo, editToDo } from "../../redux/actions/ToDuxAction"

const FormScreen = ({ route, navigation }) => {

  const theme = useTheme()
  const dispatch = useDispatch()

  const selectedTodo = route.params?.todo
  const isEditMode = route.params?.todo || false

  const [title, setTitle] = useState(selectedTodo?.title || '')
  const [desc, setDesc] = useState(selectedTodo?.desc || '')

  const onSubmit = useCallback(
    () => {
      if (!title || !desc) {
        Alert.alert('All field must be filled')
        return
      }

      if (isEditMode) {
        dispatch(editToDo({ id: selectedTodo.id, title, desc }))
      } else {
        const uid = new Date().getTime()
        dispatch(addToDo({ id: uid, title, desc }))
      }
      navigation.goBack()
    },
    [title, desc],
  )

  const onDelete = useCallback(
    () => {
      dispatch(deleteToDo(selectedTodo.id))
      navigation.goBack()
    }, [])

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primaryContainer }}>
        <Appbar.BackAction
          onPress={() => navigation.goBack()}
        />
        <Appbar.Content
          title="ToDux Form"
        />
      </Appbar.Header>

      <View style={{ paddingHorizontal: 24, paddingTop: 16, }}>
        <TextInput
          mode="outlined"
          label="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Spacer height={16} />
        <TextInput
          mode="outlined"
          label="Description"
          value={desc}
          onChangeText={text => setDesc(text)}
        />
        <Spacer height={36} />
        <Button
          mode="contained"
          onPress={onSubmit}
        >
          Submit
        </Button>
        <Spacer height={16} />
        {isEditMode && (
          <Button
            mode="contained"
            onPress={onDelete}
            buttonColor={theme.colors.error}
          >
            Delete
          </Button>
        )}
      </View>
    </View>
  )
}

export default FormScreen