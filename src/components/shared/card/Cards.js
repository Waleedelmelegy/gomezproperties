import Image from 'next/image'
import Icon from '../icons/Icon';
const Card = ({ path, alt, prop  }) => {

  return (
    <>
      <div className="relative rounded-md overflow-hidden aspect-[16/9]">
        <Image
          src={path}
          alt={alt}
          fill
          className="block aspect-[16/9] rounded-md transition-transform duration-400 photo-zoom"
        />
        <ul className="absolute top-1.5 ml-1">
          <div className="flex">
            {prop.auther && prop.auther.length > 0 && (
              <li className="lg:flex items-center cursor-pointer lg:mx-1 mr-1 my-[2px]">
                <a className="items-center rounded-sm px-[.4rem] py-[.2rem] bg-[#222222b8] bg-opacity-80 text-white-100 text-[.6rem] lg:text-[.7rem] flex font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-[.7rem] text-white-100 mr-1 text-sm "
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Listed By {prop.auther}
                </a>
              </li>
            )}
            {prop.status && prop.status.length > 0 && (
              <li className="lg:flex items-center cursor-pointer lg:mx-1 my-[2px]">
                <a className="items-center rounded-sm px-[.4rem] py-[.2rem] bg-[#75b985c8] text-[#cdffd4] text-[.6rem] lg:text-[.7rem] flex duration-200 font-semibold">
                  {prop.status}
                </a>
              </li>
            )}
          </div>
        </ul>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-[15px] line-clamp-1 my-1 dark:text-white-100 dark:text-opacity-[.87] font-bold">
            {prop.title}
          </h2>
          <p className="text-sm font-medium text-black-100 dark:text-white-100 dark:text-opacity-[.65] -mt-1 pt-0">
            {prop.desc}
          </p>
        </div>
        <p className="text-base text-[#639671] my-1 lg:my-0.5 font-extrabold">
          ${prop.price}
        </p>
      </div>

      <div className="flex justify-between pt-1 pr-1 truncate lg:pr-6 pl-1">
        <div className="flex items-center text-sm opacity-90 text-black-100 dark:text-white-100 dark:text-opacity-[.37]">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bed"
            class="svg-inline--fa fa-bed w-[15px] mr-1.5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M176 288C220.1 288 256 252.1 256 208S220.1 128 176 128S96 163.9 96 208S131.9 288 176 288zM544 128H304C295.2 128 288 135.2 288 144V320H64V48C64 39.16 56.84 32 48 32h-32C7.163 32 0 39.16 0 48v416C0 472.8 7.163 480 16 480h32C56.84 480 64 472.8 64 464V416h512v48c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16V224C640 170.1 597 128 544 128z"
            ></path>
          </svg>
          <span>{prop.beds} {prop.beds > 1 ? 'beds':'bed' }</span>
        </div>
        <div class="flex items-center text-sm opacity-90 text-black-100 dark:text-white-100 dark:text-opacity-[.37]">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bath"
            class="svg-inline--fa fa-bath w-[15px] mr-1.5"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M32 384c0 28.32 12.49 53.52 32 71.09V496C64 504.8 71.16 512 80 512h32C120.8 512 128 504.8 128 496v-15.1h256V496c0 8.836 7.164 16 16 16h32c8.836 0 16-7.164 16-16v-40.9c19.51-17.57 32-42.77 32-71.09V352H32V384zM496 256H96V77.25C95.97 66.45 111 60.23 118.6 67.88L132.4 81.66C123.6 108.6 129.4 134.5 144.2 153.2C137.9 159.5 137.8 169.8 144 176l11.31 11.31c6.248 6.248 16.38 6.248 22.63 0l105.4-105.4c6.248-6.248 6.248-16.38 0-22.63l-11.31-11.31c-6.248-6.248-16.38-6.248-22.63 0C230.7 33.26 204.7 27.55 177.7 36.41L163.9 22.64C149.5 8.25 129.6 0 109.3 0C66.66 0 32 34.66 32 77.25v178.8L16 256C7.164 256 0 263.2 0 272v32C0 312.8 7.164 320 16 320h480c8.836 0 16-7.164 16-16v-32C512 263.2 504.8 256 496 256z"
            ></path>
          </svg>
          <span>{prop.bath} Baths</span>
        </div>
        <div class="flex items-center text-sm opacity-90 text-black-100 dark:text-white-100 dark:text-opacity-[.37]">
          <Icon width={'15'} height={'15'} name={'sqft'} />
          <span>{prop.sqft}  Sqft</span>
        </div>
      </div>
    </>
  );
}
export default Card
