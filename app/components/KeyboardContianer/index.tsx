import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';

type PropsT = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  scrollStyle?: StyleProp<ViewStyle>;
};

const KeyboardContainer: React.FC<PropsT> = ({children, style = {}, scrollStyle = {}}) => (
  <SafeAreaView style={[{flex: 1}, style]}>
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[{flex: 1}]}>
      <ScrollView
        bounces={false}
        contentContainerStyle={scrollStyle}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);

export default KeyboardContainer;
