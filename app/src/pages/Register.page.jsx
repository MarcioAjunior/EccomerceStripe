import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255, 0.5), #e7e7d27f), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    display: flex;
    align-items: center;
    justify-content: center; 
`
const Wrapper = styled.div`
 padding: 20px;
 width: 40%;
 background-color: white ;
 border-radius: 25px;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex:1;
    margin: 5px 5px 0px 0px;
    padding: 15px;
    min-width : 40%;
`
const Agreement = styled.p`
    font-size: 12px;
    margin: 20px 5px;
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

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    CREATE AN ACCOUNT
                </Title>
                <Form>
                    <Input placeholder="Name" type="text"/>
                    <Input placeholder="Last Name" type="text"/>
                    <Input placeholder="Your email" type="mail"/>
                    <Input placeholder="Username" type="text"/>
                    <Input placeholder="Password" type="password"/>
                    <Input placeholder="Confirm Password" type="password"/>
                    <Agreement>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit nam officiis omnis, totam eos perferendis maxime incidunt, voluptatibus magnam deserunt ab maiores cum nesciunt, perspiciatis consequatur sit nemo vel est!
                    </Agreement>
                    <Button type="submit">CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
