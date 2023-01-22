import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';
import React from 'react';

export default function App() {

  const [inputValue, setInputValue] = React.useState('');
  const [list, setList] = React.useState([]);

  const buttonPressed = (button) => {
    if ((button) === 'Add') {
      setList([...list, {key: inputValue}])
      setInputValue('');
    } 
    else if ((button) === 'Clear') {
      setList(['']);
      setInputValue('');
      Alert.alert('Shopping list cleared');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.textinputBox}>
        <TextInput 
          style={styles.textinput}
          onChangeText={inputValue => setInputValue(inputValue)}
          value={inputValue}
        />
      </View>
      <View style={styles.button}>
        <Button color='green' onPress={() => buttonPressed('Add')} title={'Add'}/>
        <Button color='red' onPress={() => buttonPressed('Clear')} title={'Clear'}/>
      </View>
      <Text style={styles.header}>Shopping List</Text>
      <FlatList 
          data={list}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={(item, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: 'blue',
  },
  textinput: {
    margin: 10,
    width: 200,
    height: 30,
    borderColor: 'black',
    borderWidth: 1,
  },
  textinputBox: {
    marginTop: 50,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    width: "25%",
  },
});
