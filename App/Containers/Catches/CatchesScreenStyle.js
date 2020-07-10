import { StyleSheet } from 'react-native'
import { Helpers, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  addNewCatchFloatingButton: {
    ...Helpers.center,
    backgroundColor: Colors.success,
  },
})
