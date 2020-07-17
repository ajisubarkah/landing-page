import React from 'react'
import { Icon } from '@material-ui/core'

const ButtonLink = props => (
  <a href={props.to} className={props.class} target={props.target}>
    {props.text}
  </a>
)

const ButtonIcon = props => (
  <a href={props.to} className="btn-icon" target="_blank">
    <Icon>{props.icon}</Icon>
  </a>
)

export { ButtonLink, ButtonIcon }
