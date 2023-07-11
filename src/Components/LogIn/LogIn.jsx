import React, { Component } from "react";
import { Button, Container, InputComponent, Logo, Qute } from "..";
import bg from "../../assets/bg.png";
import st from "./LogIn.module.css";
import logoLarge from "../../assets/logoLarge.png";
import { Body, Heading, Label } from "../Typo";
import colors from "../../styles/color";
import stick from '../../assets/stick.png'
import styles from '../../styles/styles.module.css'
export default class LogIn extends Component {
  render() {
  const { handleGoToRegister } = this.props;

    return (
      <Container width={"100vw"} height={"100vh"} row>
        
        <Container
          width={"50%"}
          height={"100%"}
          // backgroundImage={bg}
          // overlayColor="rgba(0, 0, 255, 0.3)"

        >
        <div className={st.logo}>
          <Logo image={logoLarge} />
        </div>
         <Qute
         color ={colors.label}
          text ="I always observe the people who pass by when I ride an escalator. I'll never see most of them again, so I imagine a lot of things about their lives... about the day ahead of them."
          title = "Hideo Kojima"
           />
           <img className={st.stick} src={stick}/>
        </Container>
        <Container width={"50%"}  height={"100%"}>
        
          <Container width="53%" rowGap={"14px"} >
            <Heading>Join the game!</Heading>
            <Body color="#8692A6">
            Go inside the best gamers social network!
            </Body>
            <InputComponent
              label="Your Email*"
              type="email"
              placeholder="Enter your email"
            />
            <InputComponent
              label="Enter your password"
              type="password"
              placeholder="Password"
            />
           
            <Button 
              width={"100%"}
              bg={colors.primary}
              color = {colors.body}
              fontSize="20px"
              title="LogIn"
              onClick={handleGoToRegister}

            />
           <Container row>
  
           <Label color={colors.label} style={{cursor:"pointer"}}>
           Don’t have an account?   
            </Label>
            <Label color={colors.primary} onClick={handleGoToRegister}>
             Register
            </Label>
           </Container>
           
          </Container>
        </Container>
      </Container>
    );
  }
}
