// Import libraries for making Component
import React from 'react';
import { Text, View } from 'react-native';

// Make a Component with props passed in
const Header = (props) => {

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.9,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 15
  }
};

// Make the component available to other parts of the App
export { Header };
