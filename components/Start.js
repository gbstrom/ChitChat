import React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.title}>Chit Chat!</Text>
        <TextInput
          style={styles.inputText}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='Your name'
        />
        <View>
          <Text style={styles.colorSelectionLabel}>Choose Background Color</Text>
          <View>

            <TouchableOpacity
              // onPress={() =>{ this.changeBackgroundColor(something)}}
              style={ styles.colorOption}
            >
              <View style={styles.colorOption1}>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() =>{ this.changeBackgroundColor(something)}}
              style={ styles.colorOption}
            >
              <View style={styles.colorOption2}>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() =>{ this.changeBackgroundColor(something)}}
              style={ styles.colorOption}
            >
              <View style={styles.colorOption3}>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              // onPress={() =>{ this.changeBackgroundColor(something)}}
              style={ styles.colorOption}
            >
              <View style={styles.colorOption4}>
              </View>
            </TouchableOpacity>

          </View>
        </View>
        <Button
          style={ styles.button }
          title="Start Chatting"
          onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 45,
  },
  inputText: {
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    opacity: 0.5,
  },
  colorSelectionLabel: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    opacity: 1,
  },
  colorOption:{
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
},
  colorOption1: {
    flexDirection: 'row',
    backgroundColor: '#090C08',
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 2,
  },
  colorOption2: {
    flexDirection: 'row',
    backgroundColor: '#474056',
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 2,
  },
  colorOption3: {
    flexDirection: 'row',
    backgroundColor: '#8A95A5',
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 2,
  },
  colorOption4: {
    flexDirection: 'row',
    backgroundColor: '#B9C6AE',
    width: 45,
    height: 45,
    borderRadius: 100,
    margin: 2,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    backgroundColor: '#757083',
  }
});

