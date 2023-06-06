'use client'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { Nav } from './Nav'
const Header = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)
  const [sticked, setSticked] = useState(false)

  useEffect(() => setHasMounted(true))

  useEffect(() => {
    const onScroll = () => {
      const top = 75
      if (window.pageYOffset > top) {
        setSticked(true)
      } else {
        setSticked(false)
      }
    }
    window.addEventListener('scroll', onScroll)
  }, [])
  if (!hasMounted) return null

  return (
    <header
      className={`${sticked
        ? 'blacknav active fixed h-[75px] z-50 top-0 left-0 right-0 flex px-2 lg:px-20 border-b items-center  border-white-500 bg-[#fdfdfe] text-black-600 dark:bg-[#1C1C1C] dark:text-white-100 dark:border-black-500 '
        : 'fixed h-[75px] z-50 top-0 left-0 right-0 items-center flex px-2 lg:px-20'} `}
    >
      <div className='flex-auto flex items-center'>
        <Nav theme={theme} sticked={sticked} />
      </div>
      <div className='py-10 flex'>
        <button
          onClick={() => {}}
          className='flex h-[2.75rem] hover:bg-[#3f3f3f] bg-[#333] duration-200 rounded-md p-2 text-white-100 mx-3 px-4'
        >
          Login
        </button>
        {theme === 'dark' &&
          <button onClick={() => setTheme('light')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
              className='flex h-[2.75rem] w-[2.75rem] hover:bg-[#3f3f3f] bg-[#333] duration-200 rounded-md p-2 text-white-100'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
              />
            </svg>
          </button>}
        {theme === 'light' &&
          <button onClick={() => setTheme('dark')}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              aria-hidden='true'
              className='flex h-11 w-11 p-2 text-white-600 rounded-md hover:bg-[#3f3f3f] bg-[#333]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
              />
            </svg>
          </button>}
      </div>
    </header>
  )
}
export default Header
