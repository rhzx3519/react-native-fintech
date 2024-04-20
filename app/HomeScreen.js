import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native";

import styles from './app.style';
import { SIZES } from '../constants';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const navigation = useNavigation();

  return (
    <ScrollView style={{ ...styles.container(insets), flex: 1, padding: SIZES.medium }}>
      <View>
        <Text>Home</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.push('SignUp')
        }}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};

export default HomeScreen;