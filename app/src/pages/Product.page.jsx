import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImageContainer = styled.div`
flex :1;
`
const Image = styled.image`
width: 100%;
height: 90vh;
object-fit: cover;

`
const InfoContainer = styled.div`
flex: 2;
padding: 0px 5px;
`
const Title = styled.h1`
font-weight: 200;
`
const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;

`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color };
margin: 0px 20px;
cursor: pointer;
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal ;
    font-size: 15px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
    color: teal;
    background-color: white;
    transform: scale(1.1);
}
`


const Product = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim jupsuit</Title>
                    <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure illum ullam alias veniam, enim cum. Ea illum incidunt aliquid quas ut quia in ad laudantium numquam praesentium. Earum, accusamus architecto!</Description>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="red"></FilterColor>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="blue"></FilterColor>
                            <FilterColor color="white"></FilterColor>
                        </Filter>
                        <Filter>
                            <FilterTitle></FilterTitle>
                            <FilterSize>
                            <FilterSizeOption selected disabled>SIZE</FilterSizeOption>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>SMALL</FilterSizeOption>
                                <FilterSizeOption>MEDIUM</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Product
