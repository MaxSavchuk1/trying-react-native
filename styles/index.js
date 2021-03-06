import { StyleSheet } from 'react-native';
import CONSTANTS from '../constants';

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  todosMainContainer: {
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
    borderColor: '#bbb',
    borderRadius: 5,
    marginVertical: 5,
    shadowRadius: 2,
  },
  navbarContainer: {
    height: 50,
    backgroundColor: CONSTANTS.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderColor: CONSTANTS.MAIN_COLOR,
    height: 36,
    paddingLeft: 10,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stickyButton: {
    right: 10,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'flex-end',
  },
  mainContainerNavigationItem: {
    backgroundColor: CONSTANTS.MAIN_COLOR,
    margin: 10,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
  },
  mainContainerNavigationItemText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
