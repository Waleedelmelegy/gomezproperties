import React from 'react'
import PropTypes from 'prop-types'
import Buy from './icons/Buy'
import Sell from './icons/Sell'
import Rent from './icons/Rent'
import Mortgage from './icons/Mortgage'
import Team from './icons/Team'
import Realtor from './icons/Realtor'
import Guide from './icons/Guide'
import Marketing from './icons/Marketing'
import Faq from './icons/Faq'
import Sqft from './icons/Sqft'

const Icon = ({ name, width = '100%', height = '100%', fill }) => {
  const getIcon = name => {
    switch (name) {
      case 'buy':
        return <Buy width={width} height={height} fill={fill} />
      case 'sell':
        return <Sell width={width} height={height} fill={fill} />
      case 'rent':
        return <Rent width={width} height={height} fill={fill} />
      case 'mortgage':
        return <Mortgage width={width} height={height} fill={fill} />
      case 'team':
        return <Team width={width} height={height} fill={fill} />
      case 'realtor':
        return <Realtor width={width} height={height} fill={fill} />
      case 'guide':
        return <Guide width={width} height={height} fill={fill} />
      case 'marketing':
        return <Marketing width={width} height={height} fill={fill} />
      case 'faq':
        return <Faq width={width} height={height} fill={fill} />
      case 'sqft':
        return <Sqft width={width} height={height} fill={fill} />
      default:
        return null
    }
  }

  return (
    <span>
      {getIcon(name)}
    </span>
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.any,
  height: PropTypes.any,
  animation: PropTypes.string
}
export default Icon
