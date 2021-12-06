import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.5), #e7e7d27f), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")center;
    display: flex;
    align-items: center;
    justify-content: center; 
    background-size: cover;
`
const Wrapper = styled.div`
 padding: 20px;
 width: 40%;
 background-color: white ;
 border-radius: 25px;
 width: 25%;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`
const Input = styled.input`
    flex:1;
    margin: 10px 0px;
    padding: 15px;
    min-width : 40%;
    font-size: 16px;
`   
const Button = styled.button`
    width: 40%;
    border : solid 2px teal;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    transition : all 0.2s;    

    &:hover{
        color: teal;
        background: white;
    }
    `
const Link = styled.a`
    text-decoration: none;
    color: teal;
    cursor: pointer;
    margin: 10px 0px;
    font-size: 12px;
`
const ContainerLink = styled.div`
    display: flex;
    justify-content: space-between;
`

const Login = () => {
    return (
        <Container>
        <Wrapper>
            <Title>
                SIGN IN
            </Title>
            <Form>
                    <Input placeholder="Username" type="text"/>
                    <Input placeholder="Password" type="password"/>
                    <Button type="submit">ENTER</Button>
                    <ContainerLink>
                    <Link>DO YOU NOT REMEMBER PASSWORD ?</Link>
                    <Link>REGISTER NOW!</Link>
                    </ContainerLink>
            </Form>
        </Wrapper>
    </Container>
    )
}

export default Login
