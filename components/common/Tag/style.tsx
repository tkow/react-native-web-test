import { StyleSheet } from "react-native";
import styled from 'styled-components/native'

const defaultScale = 1
const defaultTagSize = 32
const defaultFontSize = 22

const setTagHeight = ({scale}:{scale?:number}) => scale ? defaultTagSize*defaultScale:defaultTagSize

export const TouchZone = styled.TouchableOpacity`
  justifyContent: center;
  backgroundColor: #e0e0e0;
  borderRadius: 16;
  paddingHorizontal: 12;
  height: ${setTagHeight};
  margin: 4px;
`

export const TagText = styled.Text`
  fontSize: ${({scale}:{scale?:number}) => scale ? defaultScale*defaultFontSize:defaultFontSize};
  color: rgba(0, 0, 0, 0.87);
`

export const TextInput = styled.TextInput`
  margin: 0;
  padding: 0;  
  paddingHorizontal: 12;
  flex: 1;
  height: ${setTagHeight};
  fontSize: 13;
  color: rgba(0, 0, 0, 0.87);
`

export const Container = styled.View`
  flexDirection: row;
  flexWrap: wrap;
  alignItems: center;
`
export const TextInputContainer = styled.View`
  flex: 1;
  width: 100;
  height: ${setTagHeight};
  margin: 4px;
  borderRadius: 16;
  backgroundColor: "#ccc";
`