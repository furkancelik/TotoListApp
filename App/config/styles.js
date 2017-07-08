// @flow
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  homeText: {
    fontSize: 20,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  containerCenter: {
    flex: 1,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    backgroundColor: '#FFF',
    height: 35,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    marginRight: 0,
    padding: 4,
    fontSize: 14,
    color: '#333',
  },
  saveBtn: {
    flex: 0,
    backgroundColor: '#06f',
    margin: 6,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  saveBtnTxt: { fontSize: 15, color: '#FFF', fontWeight: 'bold' },
  btn: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#06f',
    // flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  btnTxt: { color: '#FFF', fontSize: 16, textAlign: 'center' },
});
