import { useCallback, useState } from "react"
import { Alert, View } from "react-native"
import { Appbar, Button, TextInput, useTheme } from "react-native-paper"
import { useDispatch } from "react-redux"
import Spacer from "../../components/Spacer"
import { addToDo } from "../../redux/actions/ToDuxAction"

const FormScreen = ({ navigation }) => {

  const theme = useTheme()

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const onSubmit = useCallback(
    () => {
      if (!title || !desc) {
        Alert.alert('All field must be filled')
        return
      }

      const uid = new Date().getTime()
      dispatch(addToDo({ id: uid, title, desc }))
      navigation.goBack()
    },
    [title, desc],
  )

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
      </View>
    </View>
  )
}

export default FormScreen