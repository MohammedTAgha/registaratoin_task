import React, { Component } from 'react'
import Container from '../Container/Container'
import { Body, Heading1 } from '../Typo'
import st from './Qute.module.css'
import corner from '../../assets/corner.png'
export default class Qute extends Component {
  render() {
    return (
        <>
         
      <Container alignItems="flex-start" justifyContent="space-evenly" height="400px">
        <Heading1 color={"#00DAF7"} >
         “
        </Heading1>
        <Body color="#fff" className={st.intro} >
        I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them.
        </Body>
        <Body color="#fff">
        Hideo Kojima
        </Body>
        <img src={corner} className={st.corner}/>
      </Container>
      

      </>
    )
  }
}
