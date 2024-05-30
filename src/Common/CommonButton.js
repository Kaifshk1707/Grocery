import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CommonButton = ({ onPress, title, textColor, bgColor, disabled,Login  }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, { backgroundColor: bgColor }]}
      onPress={onPress}
    >
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 330,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
});
