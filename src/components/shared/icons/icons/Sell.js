import propTypes from 'prop-types'

const Sell = ({ width = 48, height = 48 }) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      aria-hidden='true'
      className='h-5 mt-0.5 text-black-500 group-hover:text-black-800 dark:text-black-300 dark:group-hover:text-white-400'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
        className='icon-stroke'
      />
    </svg>
  )
}

Sell.propTypes = {
  fill: propTypes.string,
  width: propTypes.number,
  height: propTypes.number
}

export default Sell
