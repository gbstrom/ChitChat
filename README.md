Chit Chat!

Description

This is a chat app for mobile devices. Users will enter their names and choose a background color before joining a chat interface where they can send messages, photos, and share their location.


Key Features

1. A start page where users enter their name and choose a background color for the chat screen.
2. A page displaying previous messages, with an input field and submit button.
3. A "more options" button in the input field where users can choose to send photos or share their location.
4. Data is stored in Google Firebase.

Tech Stack

React Native, Expo, Firebase, Firestore, Gifted Chat

Prerequisites

To duplicate my development environment, you will need two fundamental resources

1. Expo (set this up as follows:)

npm install expo-cli --global
expo init

2. Android Studio (to create an android emulator where you can run the code and see how it works through the Expo app)

Installation

npm install --save react-navigation

npm install @react-native-async-storage/async-storage

npm install @react-native-community/masked-view

npm install --save firebase@8.2.3

npm install react-native-gifted-chat --save

npm install expo-image-picker

npm install expo-location

npm install expo-camera

npm install react-native-maps

[Note: expo-permissions, which I was initially planning to use, has been deprecated, so instead the app uses more specific permissions packages expo-image-picker, expo-camera, etc.]

[Note also: I had a very hard time getting firebase to cohere with my project. In the end I found that firebase version 8.2.3 created the fewest errors.]

To launch the app, enter this in the CLI:

npm start

Expo will start the app and display a QR code in the terminal. You can then run the app either on your phone by scanning the QR code or by typing "a" to open it on your emulator.