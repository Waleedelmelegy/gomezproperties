import Card from '../shared/card/Cards'

const Sections = ({ item }) => {
  return (
    <div className='w-[95%] lg:w-5/6 py-2 lg:py-4 m-auto'>
      <h2 className='text-xl font-bold mb-1 text-black-500 dark:text-white-100 dark:text-opacity-[.87]'>
        {item.title}
      </h2>
      <ul className='flex flex-row lg:grid lg:grid-cols-4 overflow-x-scroll py-3 gap-6 '>
        {item.list.map((el, index) =>
          <li
            className='flex-none lg:col-span-1 hover:opacity-90 transition duration-200 cursor-pointer'
            key={index}
          >
            <Card
              path={`/assets/realestate-01.webp`}
              layout='fill'
              alt={el.title}
              prop={el}
            />
          </li>
        )}
      </ul>
    </div>
  )
}
export default Sections
