import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AniLink_ from 'gatsby-plugin-transition-link/AniLink'
import { routes } from 'utils'

export const Anchor = ({
  activeClassName = "active",
  bg = "#FF671D",
  direction = "left",
  children = "Link Text",
  to = routes.home,
  ...props
}) => (
  <AniLink
    activeClassName={activeClassName}
    bg={bg}
    cover
    direction={direction}
    to={to}
    {...props}
  >
    {children}
  </AniLink>
)

Anchor.propTypes = {
  activeClassName: PropTypes.string,
  bg: PropTypes.string,
  direction: PropTypes.oneOf([
    'up',
    'down',
    'left',
    'right',
  ]),
  children: PropTypes.any,
  to: PropTypes.string,
}

const AniLink = styled(AniLink_)``
