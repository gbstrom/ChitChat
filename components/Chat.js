import React from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  databaseURL: "chitchat-f6202.firebaseio.com",

  apiKey: "AIzaSyC7cUL5bWXIiPBYV7H6zSU3odUrtNP55mQ",
  authDomain: "chitchat-f6202.firebaseapp.com",
  projectId: "chitchat-f6202",
  storageBucket: "chitchat-f6202.appspot.com",
  messagingSenderId: "129417189582",
  appId: "1:129417189582:web:5bcb6dde0c4fd59d38d89f"
};

export default class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
			uid: 0,
      user: {
				_id: '',
				name: '',
				avatar: '',
			},
    }

  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

  this.referenceChatMessages = firebase.firestore().collection("messages");

  }

  componentDidMount() {
    // let name = this.props.route.params.name; // OR ...
    let { name } = this.props.route.params;

    this.props.navigation.setOptions({ title: name });

    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return await firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
        user: {
          _id: user.uid,
          name: name,
          avatar: "https://placeimg.com/140/140/any",
        },
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
      // console.log(firebase.firestore().collection("messages"));
    });

  };

  // this function gets all the messages in firebase and adds them to the state of the app instance running on the user's device. It is constantly
  // running in somme mysterious way that is set up in the context of the unsubscribe function in componentDidMount.
  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    this.setState({
      messages
    });
    // console.log(this.state.messages);
  };

  componentWillUnmount() {
    this.unsubscribe();
    this.authUnsubscribe();
  }

  // this function adds whatever the user has just typed in as a new document in the firebase collection. It is called inside the onSend function.
  addMessage() {
		const message = this.state.messages[0];
    // console.log(this.state.messages);
		// add a new message to the collection
    // console.log(message._id,)
		this.referenceChatMessages.add({
			_id: message._id,
			text: message.text,
			createdAt: message.createdAt,
			user: this.state.user,
      uid: this.state.uid,
		});
	};

  // this is the function that is supposed to be called when someone presses the send button, which is set up in the GiftedChat component.
  // The function takes whatever the user has typed in, and does two things with it:
  // 1. it adds it as a new message to the state of the app instance running on the user's device;
  // 2. it runs addMessage(), which causes the user's new message to be added as a new document in the firebase collection.

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }), () => {
    this.addMessage();
  });

// the problem with my onSend code is that addMessage is happening before the setState code is done because it should be asynchronous.

//  this.setState({ title: event.target.value }, () => this.APICallFunction());


}

  // This is the function that makes the background color of the sender's text bubbles black instead of blue.
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  };

  render() {
    const backgroundColor = this.props.route.params.backgroundColor;

    return (
      <View style={{flex:1}}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={usersNewMessage => this.onSend(usersNewMessage)}
          user={{
            _id: this.state.user._id,
            name: this.state.name,
            avatar: this.state.user.avatar,
          }}
        />
        {/* This code here is necessary to prevent the keyboard from blocking the input box on older Android phones. */}
        { Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null }
      </View>
       /* <View style={{
        flex: 1,
        alignItems:'center', 
        justifyContent:'center',
        backgroundColor: backgroundColor ? backgroundColor: '#fff',
      }}>
      </View> */
    );
  };
}