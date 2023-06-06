
import Image from 'next/image'
import Icon from './shared/icons/Icon'
import { useEffect, useState } from 'react'

export const Nav = ({theme, sticked}) => {
  const[logo, setLogo] = useState('navlogowhite')
  const links = [
    {
      title: 'Services',
      link: '#',
      children: [
        { title: 'Buy', desc: 'Browse Coastal Bend Listings', icon: 'buy' },
        { title: 'Sell', desc: 'List Your Home With Gomez Properties', icon: 'sell' },
        {
          title: 'Rent',
          desc: 'Find Your Next Rental and Start An Application', icon: 'rent'
        },
        {
          title: 'Mortgage Calculator',
          desc: 'Crunch The Numbers | Determine Your Home Budget',
          icon: 'mortgage'
        }
      ]
    },
    { title: 'Our Team', link: '#', children: [
        { title: 'Our Team', desc: 'Meet The Realtors and Office behind Gomez ', icon: 'team' },
        {title: 'Become A Realtor', desc: 'Join The Gomez Properties Family', icon:'realtor'},
      ] 
    },
    { title: 'Learn', link: '#', children: [
      {title: 'First-Time Home Buyer Guide', desc: 'Our Guide For First Time Home Buyers', icon: 'guide'},
      {title: 'Home Marketing Guide', desc: 'Learn What Makes Our Marketing So Dynamic', icon: 'marketing'},
      {title: 'Frequently Asked Questions', desc: 'Get Answers For The Questions We Are Asked Most', icon: 'faq'}

    ] },
    { title: 'Contact', link: '#' }
  ]

  useEffect(() => {
    if(sticked){
      if(theme === 'dark')
        setLogo('navlogowhite')
        else setLogo('navlogoblack')
    }else{
      setLogo('navlogowhite')
    }
  }, [sticked ,theme])

  return (
    <nav>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <div className='lg:hidden mr-4 lg:mr-0'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
            className=' h-11 mt-1 w-11 text-white-100 dark:text-white-100 p-1 rounded-md bg-black-900 rounded-lg '
            data-collapse-toggle='navbar-dropdown'
            type='button'
            aria-controls='navbar-dropdown'
            aria-expanded='false'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h7'
            />
          </svg>
        </div>
        <a href='#' className='flex items-center'>
          <Image
            src={`/assets/${logo}.svg`}
            alt=''
            width={100}
            height={100}
            className='h-8 mr-3'
          />
        </a>
        <div className='hidden w-full md:block md:w-auto'>
          <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0'>
            {links &&
              links.map(item =>
                <li key={item.title} className='flex-auto'>
                  <a
                    href={item.link}
                    className='cursor-default peer py-6'
                  >
                    <span className='text-base'>{item.title}</span>
                    
                    <div className='animated-underline' />
                  </a>
                  <div className='drop-down hidden peer-hover:flex hover:flex'>
                    {item?.children && (
                        <div className='bg-[#ffffff] drop-shadow-[0_35px_35px_rgba(0,0,0,0.20)] dark:drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)] dark:bg-[#1C1C1C] dark:shadow-3xl divide-x-2 rounded-lg px-10 py-6 mx-0 h-full cursor-pointer relative z-50 flex'>
                            <ul>
                            {item?.children.length > 0 && item.children.map(child =>
                                <li className='group py-3 flex items-start' key={child.title}>
                                    <div>{child.icon && <Icon name={child.icon} width={50} height={50}  />}</div>
                                <div>
                                    <div className='text-[15px] font-bold text-black-600 group-hover:text-black-900 dark:text-[#aaa] dark:group-hover:text-[#fff]'>
                                    {child.title}
                                    </div>
                                    <div className='text-[14px] font-medium -mt-0.5 text-black-900 opacity-70 group-hover:text-black-900 dark:text-[#aaa] dark:group-hover:text-[#fff] '>
                                    {child.desc}
                                    </div>
                                </div>
                                </li>
                            )}
                      </ul>
                        </div>
                    )}
                    </div>
                </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
