import React, { Component } from "react";
import { Button, Container, InputComponent, Logo, Qute } from "../";
import bg from "../../assets/bg.png";
import st from "./Register.module.css";
import logosmall from "../../assets/logosmall.png";
import { Body, Heading, Label } from "../Typo";
import colors from "../../styles/color";
import styles from '../../styles/styles.module.css'
export default class Register extends Component {
  render() {
  const { handleGoToLogIn } = this.props;
    return (
      <Container width={"100vw"} height={"100vh"} row>
        <div className={st.logo}>
          <Logo image={logosmall} />
        </div>
        <Container
          width={"45%"}
          height={"100%"}
          backgroundImage={bg}
          overlayColor="rgba(0, 0, 255, 0.3)"
        >
          <Qute text ="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
          title = "Hideo Kojima"
           />
        </Container>
        <Container width={"65%"} >
          <Container width="53%" rowGap={"14px"}>
            <Heading>Register Individual Account!</Heading>
            <Body color="#8692A6">
              For the purpose of gamers regulation, your details are required.
            </Body>
            <InputComponent
              label="Email address*"
              type="email"
              placeholder="Enter your email"
            />
            <InputComponent
              label="Password"
              type="password"
              placeholder="Password"
            />
            <InputComponent
              label="Repeat password*"
              type="password"
              placeholder="Repeat password"
            />
            <Button 
              width={"100%"}
              bg={colors.primary}
              color = {colors.body}
              fontSize="20px"
              title="Register Account"
            />
            <Label color={colors.label}>
              - OR -
            </Label>
            <Button
              width={"100%"}
              bg={colors.body}
              color={colors.heading}
              shadow
              fontSize="20px"
              title="login"
              onClick={handleGoToLogIn}
            />
          </Container>
        </Container>
      </Container>
    );
  }
}
