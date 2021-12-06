import React, {useState} from 'react'
import styled from 'styled-components'
import ArrowLeft from '@material-ui/icons/ArrowLeft'
import ArrowRight from '@material-ui/icons/ArrowRight'
import { sliderItems } from '../data'
import { mobile } from '../responsive'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    margin-top: 10px;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #e7e4e4;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ props => props.direction === "left" && "10px" };
    right: ${ props => props.direction === "right" && "10px" };
    margin: auto;
    opacity: 0.8;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.sliderIndex * -100}vw);
    transition: all 1s ease;
    ${mobile({width : '100vw'})}
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${(props) => props.bg};
`
const ImgContaniner = styled.div`
flex: 1;
height: 100%;
`
const Image = styled.img`
height: 80%;
`

const InfoContainer = styled.div`
flex: 2;
padding: 50px;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.p`
margin: 50px 0px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeft/>
            </Arrow>
            <Wrapper sliderIndex={slideIndex}>
                {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                <ImgContaniner>
                        <Image src={item.img}/>
                </ImgContaniner>
                <InfoContainer>
                    <Title>
                        {item.title}
                    </Title>
                    <Description>
                        {item.desc}
                    </Description>
                    <Button>SHOW NOW</Button>
                </InfoContainer>
                </Slide>
                )
                )}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRight/>
            </Arrow> 
        </Container>
    )
}

export default Slider
