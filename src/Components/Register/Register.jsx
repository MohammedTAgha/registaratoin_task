import React, { Component } from 'react'
import {Container, Logo, Qute} from '../'
import bg from '../../assets/bg.png'
import st from './Register.module.css'
import logosmall from '../../assets/logosmall.png';
export default class Register extends Component {
  render() {
    return (
      <Container width={"100vw"} height={"100vh"} row>
      <div className={st.logo}>
        <Logo image={logosmall}/>
      </div>
  <Container width={"45%"} height={"100%"} backgroundImage={bg} overlayColor="rgba(0, 0, 255, 0.3)">
    <Qute />
  </Container>
  <Container width={"65%"} >
    
  </Container>
</Container>

    )
  }
}
