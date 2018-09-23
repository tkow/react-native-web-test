import React, { StatelessComponent } from "react";
import {
  View, 
  ViewStyle,
  TextStyle,
  TextInput,
  TextInputProps
} from "react-native";
import {Tag} from "./Tag";
import styles from './style'
import {
  compose,
  withState,
  withHandlers,
  withProps
} from 'recompose'

interface TagViewState {
  text: string
};

interface TagViewStyleProps {
  style?: ViewStyle
  inputStyle?: ViewStyle
  tagContainerStyle?:ViewStyle
  tagTextStyle?: TextStyle
}

export interface TagViewProps extends Partial<TagViewState>,TagViewStyleProps {
  tags: string[]
  readOnly: boolean
  setText?: any
  onChangeTags?: Function
  handleOnChangeText?:any
  handleOnKeyPress?:any
  removeTags?:any
  addTags?:any
  onEndEditing?:any
  onTagPress?(tag:string,index:number,event:any): any
};

const _TagViewBase: StatelessComponent<TagViewProps> = (props:any) => (
  <View
    style={[styles.Container,props.style]}
  >
  {props.tags.map((tag, i) => (
    <Tag
      key={i}
      label={tag}
      onPress={(event)=>props.onTagPress&& props.onTagPress(tag,i,event)}
      style={props.tagViewStyle}
      tagTextStyle={props.tagTextStyle}
      readOnly={props.readOnly}
    />
  ))}
  {!props.readOnly && (
    <View style={styles.TextInputContainer}>
      <TextInput
        value={props.text}
        style={[styles.TextInput,props.inputStyle]}
        onChangeText={props.handleOnChangeText}
        onEndEditing={props.onEndEditing}
        underlineColorAndroid="transparent"
      />
    </View>
  )}
  </View>
) 

const TagViewBase:React.ComponentClass<TagViewProps> = compose(
  withState('text','setText',''),
  withProps(({
    tags,
    readOnly = true
  }) => ({
    tags,
    readOnly
  })),
  withHandlers(
    { 
      handleOnChangeText: (props:TagViewProps) => (text) => {
        if (text.length === 0) {
          props.onChangeTags && props.removeTags({
            text,
            index:-1
          })
          return props.setText(' ')
        } else if (
          text.length > 1 &&
          (text.slice(-1) === " " || text.slice(-1) === ",")
        ) {
          props.onChangeTags && props.addTags({
            text
          })
          return props.setText(' ')
        } 
        props.setText(text)
      }
    }
  )
)(
  _TagViewBase
) as React.ComponentClass<TagViewProps>

const TagView = ((props:TagViewProps) => ( 
  <TagViewBase {...props} readOnly={true}/>
)) as StatelessComponent<Partial<TagViewProps>>

export { TagView,TagViewBase };