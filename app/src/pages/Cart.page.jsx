import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from "../responsive";

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
`
const Title = styled.h1`
font-weight: 300;
text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopTexts = styled.div`

`
const Product = styled.div`
display: flex;
justify-content: space-between;
`
const ProductDetails = styled.div`
flex:2;
display: flex;
`

const Image = styled.img`
    width: 350px;
`

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

const ProdName = styled.div``

const ProdId = styled.span``

const ProdColor = styled.div`
    border-radius: 50%;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.color};
    `

const ProdSize = styled.div``

const PriceDetail = styled.span`
display: flex;
flex:1;
align-items: center;
justify-content: space-around;
flex-direction: column;
`

const ProdAmountContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProdPrice = styled.div`
    font-size: 30px;
    font-weight: bold;
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props)=> props.type === "filled" && "none"};
    background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=> props.type === "filled" && "white"};
    
`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
flex: 3;

`
const Summary = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    padding: 20px;
    border: 0.5px solid lightblue;
    height: 50vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
`
const SummaryTitle = styled.span`
    font-size: 25px;
    font-weight: 900;
    `

const SummaryItem = styled.span`
display: flex;
justify-content: space-between;
`

const SummaryItemText = styled.span``

const SummaryPrice = styled.span``

const Button = styled.button`
    padding: 10px;
`

const InputQt = styled.input`
    border: none;
    outline: none;
    padding: 2px 0px;
    width: 10px;
    `


const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <Announcement/>
            <Wrapper>
                <Title>
                    YOUR BAG
                </Title>
                <Top>
                    <TopButton>CONTINUE SHIPPING</TopButton>
                    <TopTexts>
                        <TopText>
                            Shopping Bag(2)
                        </TopText>
                        <TopText>
                            Your Wishlist
                        </TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProdName><b>PRODUCT </b>POGOBOL DA ESTRELA</ProdName>
                                    <ProdId><b>ID </b>546451321321</ProdId>
                                    <ProdColor color="black"/>
                                    <ProdSize><b>Size </b>37.75</ProdSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                               <ProdAmountContainer>
                                    <Add style={{ cursor: "pointer" }}/>
                                    <InputQt value="2"/>
                                    <Remove style={{ cursor: "pointer" }}/>
                               </ProdAmountContainer>
                               <ProdPrice>$ 42</ProdPrice>
                            </PriceDetail>
                        </Product>
                        <hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProdName><b>PRODUCT </b>POGOBOL DA ESTRELA</ProdName>
                                    <ProdId><b>ID </b>546451321321</ProdId>
                                    <ProdColor color="black"/>
                                    <ProdSize><b>Size </b>37.75</ProdSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetail>
                               <ProdAmountContainer>
                                    <Add style={{ cursor: "pointer" }}/>
                                    <InputQt value="2"/>
                                    <Remove style={{ cursor: "pointer" }}/>
                               </ProdAmountContainer>
                               <ProdPrice>$ 42</ProdPrice>
                            </PriceDetail>
                        </Product>
                        <hr/>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>
                                <b>SubTotal :</b>  
                            </SummaryItemText>
                            <SummaryPrice> $40 </SummaryPrice>
                        </SummaryItem>
                        
                        <SummaryItem>
                            <SummaryItemText>
                                SHIPPING DIST  
                            </SummaryItemText>
                            <SummaryPrice> $80 </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>
                                DESC
                            </SummaryItemText>
                            <SummaryPrice> %10 </SummaryPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>
                             ORDER
                            </SummaryItemText>
                            <SummaryPrice>51218645</SummaryPrice>
                        </SummaryItem>

                        <Button type="submit">
                            Checkout now!
                        </Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Cart
