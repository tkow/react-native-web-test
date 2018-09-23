import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TagView} from '../components/common/Tag'

import styled from 'styled-components/primitives'

export const TextTest = styled.Text`
  font-size: 1.4rem;
  color: red;
  justify-content:center;
  align-items:center;
`

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  text: {
    alignItems: 'center',
    fontSize: 24
  },
  tagViewStyle:{
    marginVertical: 16,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default props => (
  <View style={styles.container}>
    <Text style={styles.text}>Welcome to Next.js!</Text>
    <TagView style={
        styles.tagViewStyle
      } 
      tags={
        ['C','C++','C#']
      }
    />
    <TextTest>test</TextTest>
  </View>
)
