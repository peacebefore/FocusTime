import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

import { fontSizes, generalSizes, spacing } from '../../utils/sizes';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';

  const HistoryItem = ({ item, index }) => {
    return (
      <Text style = { styles.historyItem(item.status) } >
        { item.subject }
      </Text>
    );
  };

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  }

  return (
    <View>
      <SafeAreaView style = {{ flex: 0.5, alignItems: 'center' }}>
        { !!focusHistory.length && (
          <View>
            <Text style = { styles.title } >Things we've focused on</Text>
            <FlatList 
              style = {{ flex: 1 }}
              contentContainerStyle = {{ 
                flex: 1, 
                alignItems: 'center' 
              }}
              data = { focusHistory }
              renderItem = { HistoryItem }
            />
            <View style = { styles.clearContainer } >
              <RoundedButton
                size = { generalSizes.md }
                title = 'Clear'
                onPress = { () => onClear() }
              />
            </View>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? colors.red : colors.green,
    fontSize: fontSizes.md  
  }),
  title: {
    color: colors.white, 
    fontSize: fontSizes.lg  
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md
  }
});