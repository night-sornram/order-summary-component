import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen'>
        <div className='w-5/6 sm:4/5 lg:w-2/5 xl:w-1/3 rounded-lg bg-white flex flex-col justify-center items-center'>
          <Image
          src={"/images/illustration-hero.svg"}
          objectFit='contain'
          width={10000}
          height={220}
          alt='hero'
          className=' rounded-t-lg object-contain'/>
          <div className='text-lg  sm:text-3xl font-extrabold sm:my-10 my-5'>
            Order Summary
          </div>
          <div className=' text-xs sm:mx-20 sm:text-base text-gray-500 mx-10'>
            You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like! 
          </div>
          <div className=' bg-violet-50 rounded-lg m-10 w-3/4 flex flex-row py-5 px-3 sm:px-5 justify-between'>
            <div className='flex flex-row'>
              <div className=' flex relative justify-center items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#DFE6FB"/><path fill="#717FA6" fill-rule="nonzero" d="M32.574 15.198a.81.81 0 00-.646-.19L20.581 16.63a.81.81 0 00-.696.803V26.934a3.232 3.232 0 00-1.632-.44A3.257 3.257 0 0015 29.747 3.257 3.257 0 0018.253 33a3.257 3.257 0 003.253-3.253v-8.37l9.726-1.39v5.327a3.232 3.232 0 00-1.631-.441 3.257 3.257 0 00-3.254 3.253 3.257 3.257 0 003.254 3.253 3.257 3.257 0 003.253-3.253V15.81a.81.81 0 00-.28-.613z"/></g></svg>
              </div>
              <div className=' flex flex-col ml-3 sm:ml-7 justify-center items-center'>
                <div className=' font-extrabold my-1 sm:0 text-xs  sm:text-base'>
                  Annual Plan
                </div>
                <div className=' text-gray-500 text-xs  sm:text-base'>
                  $59.99/year
                </div>
              </div>
            </div>
            <div className=' flex justify-center items-center font-bold text-indigo-500 cursor-pointer text-xs  sm:text-base'>
              Change
            </div>
          </div>

          <div className=' bg-indigo-600 w-3/4 p-5 rounded-lg flex justify-center items-center text-white font-bold cursor-pointer text-sm  sm:text-base'>
            Proceed to Payment
          </div>
          <div className=' w-3/4 p-5 flex justify-center items-center font-bold cursor-pointer my-5 text-sm  sm:text-base'>
            Cancel Order
          </div>

        </div>
    </div>
  )}