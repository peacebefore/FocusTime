import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { generalSizes } from '../utils/sizes';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = generalSizes.lg,
  ...props
}) => {
  return (
<TouchableOpacity style={[styles(size).radius, style]}> 
    <Text 
        style={[styles(size).text, textStyle]} 
        onPress={props.onPress}>
            {props.title}
    </Text> 
</TouchableOpacity>
  )
};

const styles = (size) => StyleSheet.create({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2
  },
  text: { color: colors.white, fontSize: size / 3 },
});