import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  todosContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 5,
    marginVertical: 5,
    shadowRadius: 2,
  },
  navbarContainer: {
    height: 70,
    backgroundColor: 'blue',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  navbarText: {
    fontSize: 20,
    color: 'white',
  },
  addTodoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  addTodoInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'blue',
    height: 36,
    paddingLeft: 10,
  },
});
