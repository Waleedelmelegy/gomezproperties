'use client'
const HeroSection = () => {
  return (
    <section className='overflow-x-hidden block static '>
      <div className='home-landing  landing-height overflow-x-hidden h-screen sm:h-[480px] lg:h-[660px] overflow-y-hidden'>
        <div className='landing-height overlay absolute top-0 left-0 w-screen lg:h-[375px] h-[200px] opacity-70 z-10 bg-gradient-to-b from-[#000000]' />
        <div className='landing-height overlay absolute top-0 left-0 w-screen h-screen sm:h-[480px] lg:h-[660px] z-10 bg-[#000] bg-opacity-70 dark:bg-opacity-90' />
        <div className='landing-height w-full m-auto grid grid-cols-12 lg:w-5/6 sm:h-[480px] lg:h-[660px] h-screen overflow-y-hidden z-30 '>
          <div className=' w-full pb-4 col-span-12 lg:col-span-6'>
            <div className='maincontent z-20 pt-[4rem] lg:pt-[7rem] '>
              <h1 className='home-hero-header relative font-bold z-20 w-[95%] m-auto lg:ml-0 text-[2.8rem] lg:text-[3.5rem] leading-[3.4rem] lg:leading-[4rem] pt-[2.6rem] sm:text-center lg:text-left sm:w-[90%] sm:text-[2.5rem] lg:m-auto pb-1 lg:pb-0 text-white-100 opacity-[.87] user-select-none'>
                Marketing Makes <br className='hidden lg:block' />
                <span className='text-[#52898a]'>The Difference</span>
              </h1>
              <h2 className='relative w-[95%] m-auto lg:w-[85%] leading-[1.6rem] text-lg lg:ml-0 lg:-mt-2 lg:text-xl font-semibold z-20 pt-2 lg:pt-4 text-white-100 lg:text-left sm:w-[90%] sm:text-center opacity-[.65] user-select-none'>
                Gomez Properties is a full service brokerage, serving Corpus
                Christi and the surrounding areas for the last 2 decades. Buy,
                Sell & Rent with Gomez.
              </h2>
              <div className='z-20 absolute lg:relative lg:-bottom-1 w-full pt-10'>
                <ul className='lg:flex px-[5px] sm:px-28 lg:px-0'>
                  <li className='lg:mr-3 px-4 py-3 text-center rounded-md text-base font-semibold cursor-pointer border-2 border-transparent duration-300 text-black-900  bg-white-100 hover:bg-[transparent] hover:border-2 hover:border-white-100 hover:text-white-100 -mb-1.5 lg:mb-0'>
                    <a className='w-full'>
                      <span className='opacity-[.87]'>Browse Homes</span>
                    </a>
                  </li>
                  <li className=' lg:my-0 my-4 px-4 py-3 text-center rounded-md text-base font-semibold cursor-pointer border-2 border-white-100 border-opacity-20 hover:border-opacity-100 duration-300 text-white-100'>
                    <a className='w-full'>
                      <span className='opacity-[.87]'>Find An Agent</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-6 w-[95%] hidden lg:block m-auto h-full'>
            <div className='relative pt-[1.4rem] lg:pt-[5.5rem] w-full lg:w-[440px] lg:m-auto lg:mr-0 z-50'>
              <div className='px-6 mt-8 py-8 rounded-lg bg-black-700 hover:bg-[#0f0f0f] duration-200 shadow-lg border-solid cursor-pointer '>
                <form method='post'>
                  <div className='mb-4'>
                    <h2 className='text-lg lg:text-2xl text-white-100 opacity-[.87] font-bold'>
                      How Much Is Your Home Worth?{' '}
                    </h2>
                    <p className='text-md font-normal text-white-100 opacity-[.65] '>
                      Recieve a personalized estimate via e-mail within the next
                      24hrs
                    </p>
                  </div>
                  <div className='my-4'>
                    <p className=' text-white-100 opacity-[.65] text-xs font-bold'>
                      Full Name
                    </p>
                    <div>
                      <input
                        type='text'
                        className='inputBoxContact focus:ring-teal-500 focus:border-teal-500 ml-0'
                        required=''
                        name='name'
                        id='name'
                      />
                    </div>
                  </div>
                  <div className='my-4'>
                    <p className=' text-white-100 opacity-[.65] text-xs font-bold'>
                      E-mail
                    </p>
                    <div>
                      <input
                        type='email'
                        className='inputBoxContact focus:ring-teal-500 focus:border-teal-500 ml-0'
                        required
                        name='email'
                        id='email'
                      />
                    </div>
                  </div>
                  <div className='my-4'>
                    <p className=' text-white-100 opacity-[.65] text-xs font-bold'>
                      Address
                    </p>
                    <div>
                      <input
                        type='email'
                        className='inputBoxContact focus:ring-teal-500 focus:border-teal-500 ml-0'
                        required
                        name='email'
                        id='email'
                      />
                    </div>
                  </div>
                  <button type='submit' className='mt-2.5 m-auto w-full block'>
                    <a
                      value='Login'
                      className='bg-black-400 hover:bg-black-600 duration-200 text-white-200 text-center py-3 w-full block rounded-lg'
                    >
                      Get Your Home Value
                    </a>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
