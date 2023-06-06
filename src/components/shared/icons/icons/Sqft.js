import propTypes from 'prop-types'

const Sqft = ({ width = 48, height = 48 }) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
      className='svg-inline--fa fa-ruler w-[15px] mr-1.5'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M177.9 494.1C159.2 512.8 128.8 512.8 110.1 494.1L17.94 401.9C-.8054 383.2-.8054 352.8 17.94 334.1L68.69 283.3L116.7 331.3C122.9 337.6 133.1 337.6 139.3 331.3C145.6 325.1 145.6 314.9 139.3 308.7L91.31 260.7L132.7 219.3L180.7 267.3C186.9 273.6 197.1 273.6 203.3 267.3C209.6 261.1 209.6 250.9 203.3 244.7L155.3 196.7L196.7 155.3L244.7 203.3C250.9 209.6 261.1 209.6 267.3 203.3C273.6 197.1 273.6 186.9 267.3 180.7L219.3 132.7L260.7 91.31L308.7 139.3C314.9 145.6 325.1 145.6 331.3 139.3C337.6 133.1 337.6 122.9 331.3 116.7L283.3 68.69L334.1 17.94C352.8-.8055 383.2-.8055 401.9 17.94L494.1 110.1C512.8 128.8 512.8 159.2 494.1 177.9L177.9 494.1z'
        className='icon-stroke'
      />
    </svg>
  )
}

Sqft.propTypes = {
  fill: propTypes.string,
  width: propTypes.number,
  height: propTypes.number
}

export default Sqft