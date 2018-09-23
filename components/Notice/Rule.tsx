import React,{Component} from 'react'
import {FullTextView} from '~/components/common/FullTextView'
import {toClass} from 'recompose'

export const Rule = toClass((props) => (
  <FullTextView headerText={'test'} text={'test'} />
))