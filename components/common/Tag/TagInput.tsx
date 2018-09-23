import {TagViewBase,TagViewProps} from './TagView'
import React,{ StatelessComponent } from 'react';
import { Button, View } from 'react-native';
import {
  compose,
  withState,
  withHandlers,
  withProps
} from 'recompose'

interface TagInputState {
  readOnly:boolean
}

interface TagInputProps extends TagViewProps,TagInputState {
  toggleReadOnly:any
}

const hoc = compose(
  withState('readOnly','toggleReadOnly',true)
)

const _TagInputBase:StatelessComponent<TagInputProps> = (props:TagInputProps) => (
  <View>
    <TagViewBase
      onEndEditing={props.toggleReadOnly(true)}
      {...props}
    />
    { props.readOnly? 
      <Button 
        title={'+'} 
        onPress={()=> props.toggleReadOnly(false)}
      />:null
    }
  </View>
) 

export const TagInput = hoc(_TagInputBase) as React.ComponentClass<TagInputProps>