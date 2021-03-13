import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';

export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(20);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  }

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  }

  return (
    <View style = { styles.container } >
      <View style = { styles.countdown } >
        <Countdown minutes = { minutes } isPaused = { !isStarted } onProgress = { onProgress } />
      </View>
      <View style = {{ paddingTop: spacing.xxl }} >
        <Text style = { styles.title } > Focusing on: </Text>
        <Text style = { styles.task }> Timer goes here: { focusSubject } </Text>
      </View>
      <View style = {{ paddingTop: spacing.md }} >
        <ProgressBar 
          progress = { progress }
          color = { colors.blue }
          style = {{ height: spacing.sm }}
        />
      </View>
      <View style = { styles.buttonWrapper } >
        <Timing onChangeTime = { changeTime } />
      </View>
      <View style = { styles.buttonWrapper } >
        { isStarted ? (
          <RoundedButton title = 'Pause' onPress = {() => setIsStarted(false)} />
        ) : (
          <RoundedButton title = 'Start' onPress = {() => setIsStarted(true)} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center'
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center'
  }
})