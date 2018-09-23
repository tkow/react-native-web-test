import React, { StatelessComponent } from "react";
import {  ViewStyle, TextStyle, GestureResponderEvent } from "react-native";

import {
  TouchZone,
  TagText
} from "./style";

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
  <TouchZone disabled={readOnly} style={style} onPress={onPress}>
    <TagText style={tagTextStyle}>{label}</TagText>
  </TouchZone>
);
