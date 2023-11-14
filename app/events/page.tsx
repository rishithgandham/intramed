import React from 'react';

export default function Events() {
  return (
    <>
      <section className="bg-transparent  antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight  ">
              Events
            </h2>

            <div className="mt-4">
              <p
                className="inline-flex items-center text-md font-bold text-slate-800 hover:underline dark:text-primary-500"
              >
                Learn more about our agenda, or discover/read more about upcoming intramed events.
                
              </p>
            </div>
          </div>
        </div>

        <ul className="flex flex-col justify-center items-center p-10 divide-y divide-black md:divide-y-0">
            <li className='grid md:grid-cols-2 md:divide-x-2 md:divide-black w-full p-10'>
                <div className=" md:text-end text-center pr-10">
                    <p className="text-3xl font-bold">
                        Intramed Kickoff Meeting
                    </p>
                    <p className='text-sm mt-5 mb-2'>11/14/2023</p>
                    <p className='text-sm my-2'>Twin Hickory Library</p>
                    <p className='text-sm my-2'>7:15 - 8:15</p>


                </div>
                <div className="md:text-start text-center text-base font-semibold md:pl-10 md:py-3 py-5">
                    
                    <p className='text-sm md:w-[300px]'>The Intramed Kickoff Meeting will officially start Intramed. This meeting will go over our mission, goals, implementation, and how you can join. Snacks will be provided</p>
                </div>
            </li>
          
            
        </ul>
      </section>
    </>
  );
}
