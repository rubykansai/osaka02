import React from 'react'
import Helmet from 'react-helmet'

const OpenGraph = props => (
  <Helmet
    title={`${props.title} - Osaka RubyKaigi 02`}
    meta={[
      { name: 'description', content: 'Regional RubyKaigi at Osaka 02' },
      {
        name: 'keywords',
        content: 'Regional RubyKaigi Osaka RubyKansai Ruby',
      },
      {
        property: 'og:image',
        content:
          'https://raw.githubusercontent.com/rubykansai/osaka02/master/src/assets/images/og.png',
      },
    ]}
  ></Helmet>
)

OpenGraph.propTypes = {}

export default OpenGraph
