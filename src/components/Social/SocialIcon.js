import React from 'react'
import styled from 'styled-components'
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa'

export const SocialIcon = ({ href, target, icon, ...props }) => {
  const Icons = {
    Facebook: <FaFacebookF />,
    Twitter: <FaTwitter />,
    LinkedIn: <FaLinkedinIn />,
    Instagram: <FaInstagram />,
  }

  return (
    <Link href={href} target={target} {...props}>
      {Icons[icon]}
    </Link>
  )
}

const Link = styled.a`
  color: ${props => props.theme.colors.white};
  display: flex;
  font-size: 1.625em; /* 26px */
  transition: ${props => props.theme.transitions.default};
  :hover {
    color: inherit;
  }
`
