import React, { Component } from 'react'
import {Container, Qute} from '../'
import bg from '../../assets/bg.png'
export default class Register extends Component {
  render() {
    return (
      <Container width={"100vw"} height={"100vh"} row>
  <Container width={"45%"} height={"100%"} backgroundImage={bg} overlayColor="rgba(0, 0, 255, 0.3)">
    <Qute />
  </Container>
  <Container width={"65%"} backgroundImage={bg}>
    adsasdad
  </Container>
</Container>

    )
  }
}
