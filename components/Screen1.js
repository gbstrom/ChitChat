import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';

export default class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello Screen1!</Text>
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         placeholder='Your name ...'
       />
        <Button
          title="Go to Screen 2"
          onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}
        />
      </View>
    )
  }
}