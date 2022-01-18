import React from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

export class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    }
  }

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }
  
  render() {
    let name = this.props.route.params.name; // OR ...
    // let { name } = this.props.route.params;

    this.props.navigation.setOptions({ title: name });

    const backgroundColor = this.props.route.params.backgroundColor;

    return (
      <View style={{
        flex: 1,
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: backgroundColor ? backgroundColor: '#fff',
      }}>
        {/* Rest of the UI */}
      </View>
    );
  };
}