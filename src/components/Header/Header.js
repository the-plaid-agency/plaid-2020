import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { WhiteTextButton } from 'components'

export const Header = () => {
  const { imageOne } = useStaticQuery(graphql`
    query {
      imageOne: file(relativePath: { eq: "banner_home_1_min.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
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
        <WhiteTextButton text="Featured Work" to="/portfolio" />
      </HeaderText>
      <HeaderImage fluid={imageOne.childImageSharp.fluid} alt="THE PLAID AGENCY" />
    </StyledHeader>
  )
}

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
const HeaderImage = styled(Img)`
  height: 100vh;
  /* object-fit: cover; */
  width: 100vw;
`
