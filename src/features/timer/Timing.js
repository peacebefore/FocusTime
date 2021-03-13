import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../../components/RoundedButton';
import { generalSizes } from '../../utils/sizes';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View styles = { styles.timingButton } >
        <RoundedButton size = { generalSizes.md } title = '10' onPress = { () => onChangeTime(10) } />
      </View>
      <View styles = { styles.timingButton } >
        <RoundedButton size = { generalSizes.md } title = '15' onPress = { () => onChangeTime(15) } />
      </View>
      <View styles = { styles.timingButton } >
        <RoundedButton size = { generalSizes.md } title = '20' onPress = { () => onChangeTime(20) } />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})