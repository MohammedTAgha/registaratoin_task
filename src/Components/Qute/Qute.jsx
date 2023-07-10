import React, { Component } from 'react'
import Container from '../Container/Container'
import { Body, Heading1 } from '../Typo'
import st from './Qute.module.css'
import corner from '../../assets/corner.png'
export default class Qute extends Component {
  
  render() {
    const {color , corner , title , text } = this.props
    return (
        <>
         
      <Container alignItems="flex-start" justifyContent="space-evenly" height="400px">
        <Heading1 color={color || "#00DAF7"} style={{lineHeight:"1px"}}>
         “
        </Heading1>
        <Body color={color || "#fff"} className={st.intro} >
        {text}
        </Body>
        <Body color={color || "#fff"}>
        {title}
        </Body>
        {corner && <img src={corner} className={st.corner}/>}
      </Container>
      

      </>
    )
  }
}
