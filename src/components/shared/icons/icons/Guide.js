import propTypes from 'prop-types'

const Guide = ({ width = 48, height = 48 }) => {
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
        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
        className='icon-stroke'
      />
    </svg>
  )
}

Guide.propTypes = {
  fill: propTypes.string,
  width: propTypes.number,
  height: propTypes.number
}

export default Guide
