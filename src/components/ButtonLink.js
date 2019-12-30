import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

const ButtonLink = props => (
  <Link to={props.url} className="social-media">
    {props.text}
    <FontAwesomeIcon icon={props.icon} />
  </Link>
)

export default ButtonLink
