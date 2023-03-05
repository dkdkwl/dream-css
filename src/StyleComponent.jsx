import React from "react"
import styled, {css} from 'styled-components';

const Container = styled.div`
  display:flex;
`
const Button = styled.button`
cursor:pointer;
width:100px;
height:200px
background:transparent;
border-radius:3px;
color:#b9eaff;
margin: 0 1em;
padding : 0.25em 1em;
${(props) => 
  props.primary && css `
  background: #009cd5;
  color:white`
}
`

export default function styleComponent() {
  return (
    <Container>
        <Button>Normal Button</Button>
        <Button primary>Normal Button</Button>
    </Container>
  )
}
