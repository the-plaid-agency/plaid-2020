import React from 'react'
import styled from 'styled-components'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
// import { Row } from 'components'
import BannerImg from 'assets/banner_f_1.jpg'

export const Header = () => (
  <StyledHeader>
    <HeaderText>
      <h1>
        <div>
          Lorem Ipsum Dolor Sit Amet<span>.</span>
        </div>
        <div>
          <span>Consectetur Adipiscing</span>.
        </div>
      </h1>
    </HeaderText>
    <HeaderImage src={BannerImg} alt="THE PLAID AGENCY" />
  </StyledHeader>
)

const StyledHeader = styled.header`
  height: 100vh;
  position: relative;
`
const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  h1 {
    color: #fff;
    text-align: center;
    user-select: none;
    margin-bottom: 0;
  }
  h1 span {
    color: ${props => props.theme.colors.primary};
  }
`
const HeaderImage = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 100vw;
`
