import styled from 'styled-components'
import React from 'react'
import {mobile} from '../responsive'

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
padding: 2px;
display: flex;
align-items : center;
justify-content: center;
font-size: 14px;
font-weight: 500;
${mobile({display : 'none'})}
`

const Announcement = () => {
    return (
        <Container>
            My Annoucemount here !
        </Container>
    )
}

export default Announcement
