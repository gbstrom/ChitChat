import React from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Pressable } from 'react-native';

const backgroundImage = require('../assets/backgroundImage.png');
const icon = require('../assets/icon.svg')


export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      backgroundColor: '',
    };
  }

  changeBackgroundColor = (newColor) => {
    this.setState({ backgroundColor: newColor });
  };

  colors = {
    color1: "#090C08",
    color2: "#474056",
    color3: "#8A95A5",
    color4: "#B9C6AE",  
  };

  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={backgroundImage} resizeMode='cover' style={styles.backgroundImage}>
        <Text style={styles.title}>Chit Chat!</Text>
        <View style={styles.box}>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputText}
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
              placeholder='Your name'
            />
          </View>
          <View>
            <Text style={styles.colorSelectionLabel}>Choose Background Color</Text>
            <View style={ styles.colorOptionContainer }>

              <TouchableOpacity
                onPress={() =>{ this.changeBackgroundColor(this.colors.color1) }}
                style={ styles.colorOption}
              >
                <View style={styles.colorOption1}>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>{ this.changeBackgroundColor(this.colors.color2) }}
                style={ styles.colorOption}
              >
                <View style={styles.colorOption2}>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>{ this.changeBackgroundColor(this.colors.color3) }}
                style={ styles.colorOption}
              >
                <View style={styles.colorOption3}>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>{ this.changeBackgroundColor(this.colors.color4) }}
                style={ styles.colorOption}
              >
                <View style={styles.colorOption4}>
                </View>
              </TouchableOpacity>

            </View>
          </View>
          <Pressable
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Chat', { 
              name: this.state.name,
              backgroundColor: this.state.backgroundColor,
            })}
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </Pressable>
        </View>
      </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 45,
    padding: 20,
  },
  box: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    minHeight: 260,
    height: "44%",
    width: "88%",
  },
  inputBox: {
    flexDirection: 'row',
    width:"88%",
    borderColor: '#757083', 
    borderWidth: 1,
    padding: 10
  },
  inputText: {
    fontSize: 16,
    fontWeight: "300",
    color: '#757083',
    opacity: 0.5,
  },
  colorOptionContainer: {
    flexDirection: 'row',
  },
  colorSelectionLabel: {
    color: '#757083',
    fontSize: 16,
    fontWeight: '300',
    opacity: 1,
    textAlign: 'center',
  },
  colorOption:{
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
},
  colorOption1: {
    flexDirection: 'row',
    backgroundColor: '#090C08',
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 2,
  },
  colorOption2: {
    flexDirection: 'row',
    backgroundColor: '#474056',
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 2,
  },
  colorOption3: {
    flexDirection: 'row',
    backgroundColor: '#8A95A5',
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 2,
  },
  colorOption4: {
    flexDirection: 'row',
    backgroundColor: '#B9C6AE',
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 2,
  },
  button: {
    flexDirection: 'column',
    backgroundColor: "#757083", 
    width: "88%"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF',
    padding: 20,
  },
});

