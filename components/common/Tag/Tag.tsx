import React, { StatelessComponent } from "react";
import {  Text,ViewStyle, TextStyle, GestureResponderEvent,TouchableOpacity } from "react-native";

import styles from "./style";

export interface TagProps {
  label?:string
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
  readOnly?: boolean
  tagTextStyle?: TextStyle
}

export const Tag:StatelessComponent<TagProps> = ({
  label,
  onPress,
  style,
  readOnly=true,
  tagTextStyle
 }) => (
  <TouchableOpacity disabled={readOnly} style={styles.TouchZone} onPress={onPress}>
    <Text style={tagTextStyle}>{label}</Text>
  </TouchableOpacity>
);
