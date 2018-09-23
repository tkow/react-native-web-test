import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {TagView} from '../components/common/Tag'

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
  </View>
)
