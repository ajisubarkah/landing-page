import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonLink = props => (
  <a href={props.to} className="social-media">
    {props.text}
    <FontAwesomeIcon icon={props.icon} />
  </a>
)

export default ButtonLink
