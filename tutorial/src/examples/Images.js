import React from "react"
import styled from "styled-components"
import big from "../assets/images/big.jpg"
const Images = () => {
  return (
    <Wrapper>
      <img src={big} alt="" />
      <h2>gatsby images</h2>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`

export default Images