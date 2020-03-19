import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { SocialIcon as SocialIcon_ } from 'components'

export const Employee = ({
  profilePicture: { fluid, alt = '', title = '' },
  firstName = 'First Name',
  lastName = 'Last Name',
  jobTitle = 'Job Title',
  linkedIn = '',
  quote = 'Amazing Quote',
  description = 'Lorem Ipsum',
  ...props
}) => (
  <StyledEmployee {...props}>
    <Image
      fluid={fluid}
      alt={alt}
      title={title}
    />
    <Gradient />
    <Info>
      <Name>{firstName}</Name>
      <Name>{lastName}</Name>
      <Meta>
        <JobTitle>{jobTitle}</JobTitle>
        {linkedIn && <SocialIcon href={linkedIn} icon="LinkedIn" />}
      </Meta>
    </Info>
  </StyledEmployee>
)

Employee.propTypes = {
  profilePicture: PropTypes.exact({
    fluid: PropTypes.object,
    alt: PropTypes.string,
    title: PropTypes.string,
  }),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  jobTitle: PropTypes.string,
  linkedIn: PropTypes.string,
  quote: PropTypes.string,
  description: PropTypes.string,
}

const StyledEmployee = styled.div`
  position: relative;
  z-index: 1;
`
const Image = styled(Img)`
  height: 100%;
`
const Gradient = styled.div`
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(255, 255, 255, 0) 50%
  );
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const Info = styled.div`
  padding: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
`
const Name = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 33px;
  margin-bottom: 0;
`
const Meta = styled.div`
  align-items: center;
  display: flex;
  margin-top: 5px;
`
const JobTitle = styled.p`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0;
`
const SocialIcon = styled(SocialIcon_)`
  color: ${props => props.theme.colors.primary};
  font-size: 1em;
  margin-left: 10px;
  :hover {
    color: ${props => props.theme.colors.white};
  }
`
