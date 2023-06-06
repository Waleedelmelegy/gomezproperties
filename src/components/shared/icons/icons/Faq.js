import propTypes from 'prop-types'

const Faq = ({ width = 48, height = 48 }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns='http://www.w3.org/2000/svg'
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
        d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
        className='icon-stroke'
      />
    </svg>
  )
}

Faq.propTypes = {
  fill: propTypes.string,
  width: propTypes.number,
  height: propTypes.number
}

export default Faq
