import React from 'react'
import PropTypes from 'prop-types'

const Speaker = props => (
  <div className="box">
    <div className="grid-wrapper">
      <div className="col-6">
        <span className="image fit">
          <img src={props.avatar_url} alt="" />
        </span>
      </div>
    </div>
    <h4>{props.name}</h4>
    <ul className="icons">
      <li>
        <a href={props.twitter_url} className="icon fa-twitter">
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a href={props.github_url} className="icon fa-github">
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
    <p>{props.abstract}</p>
  </div>
)

Speaker.propTypes = {}

export default Speaker
