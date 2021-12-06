import React from 'react'
import styled from 'styled-components'
import Facebook from'@material-ui/icons/Facebook'
import Insta from'@material-ui/icons/Instagram'
import Twitter from'@material-ui/icons/Twitter'
import Pinterest from'@material-ui/icons/Pinterest'
import Map from '@material-ui/icons/Map'
import Mail from '@material-ui/icons/Mail'
import Phone from '@material-ui/icons/Phone'

const Container = styled.div`
display: flex;

`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Center = styled.div`
flex: 1;
padding: 20px;
`
const Right = styled.div`
flex: 1;
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30PX;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListIntem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Logo = styled.h1`

`
const Desc = styled.p`
margin: 20px, 0px;
`
const SocialContainer = styled.div`
 display: flex;
`

const ContactItem = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
`
const Payment = styled.img`
    cursor: pointer;
    width: 50%;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>
                    CubeUp
                </Logo>
                <Desc>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates corrupti quaerat excepturi consectetur eum assumenda inventore architecto? Officiis mollitia tempora amet maiores autem ad, neque fuga sequi! Error, atque necessitatibus.
                </Desc>
                <SocialContainer>
                    <SocialIcon bg="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="E4405F">
                        <Insta />
                    </SocialIcon>
                    <SocialIcon bg="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    UserFul links
                </Title>
                <List>
                    <ListIntem> HOME </ListIntem>
                    <ListIntem> CART </ListIntem>
                    <ListIntem> MAN FASHION </ListIntem>
                    <ListIntem> ACESSORIES </ListIntem>
                    <ListIntem> MY ACCOUNT </ListIntem>
                    <ListIntem> ORDER TRACKING </ListIntem>
                    <ListIntem> WISHLIST </ListIntem>
                    <ListIntem> TERMS </ListIntem>
                </List>
            </Center>
            <Right>
                <Title>
                    Contact
                </Title>
                <ContactItem>
                    <Map style={{marginRight : 5}} />
                    622, Path, America
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight : 5}} />
                    +1 123456789
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight : 5}} />
                    contact@mail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer
