import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

export const Address = props => {
  const { datoCmsAddressInfo: address } = useStaticQuery(graphql`
    query {
      datoCmsAddressInfo {
        city
        googleMapsLink
        phoneNumber
        formattedPhoneNumber
        state
        suiteNumber
        streetAddress
        zip
      }
    }
  `)

  return (
    <StyledAddress {...props}>
      <a href={address.googleMapsLink} target="_blank" rel="noopener noreferrer">
        <div>{address.streetAddress}</div>
        <div>{address.suiteNumber}</div>
        <div>{address.city}, {address.state} {address.zip}</div>
      </a>
      <a href={`tel:` + address.phoneNumber} rel="noopener noreferrer">{address.formattedPhoneNumber}</a>
    </StyledAddress>
  )
}

const StyledAddress = styled.address`
  color: ${props => props.theme.colors.white};
  display: inline-flex;
  font-size: 0.875em; /* 14px */
  flex-direction: column;
  a {
    align-items: inherit;
    color: inherit;
    display: inherit;
    flex-direction: inherit;
    transition: ${props => props.theme.transitions.default};
  }
`
