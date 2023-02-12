'use client';

import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import { getData } from '@/service';
import { ContentPropsData } from '@/types/interface';

const csr = () => {
  const [data, setData] = useState<ContentPropsData[]>([]);
  useEffect(() => {
    getData()
      .then((value) => setData([...value]))
      .catch((err) => console.log('csr => ', err));
  }, []);

  return (
    <>
      <Header />
      {data.length > 0
        ? data.map((elements) => (
            <main className=' -z-50 pb-16  lg:pb-24 bg-white dark:bg-gray-900'>

              <div className='flex flex-col justify-between md:px-12  px-4 mx-auto max-w-screen-xl '>
              <img className='object-cover mx-auto max-h-80  w-full object-top ' src={elements.node.featuredImage.url} alt={'banner'} />
                <article className='mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
                  <header className='mb-4 lg:mb-6 not-format'>
                    <address className='flex items-center mb-6 not-italic'>
                      <div className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white'>
                        <div>
                          <p className='text-base font-roboto mt-4 text-gray-500 dark:text-gray-400'>
                            {elements.node.author}
                          </p>
                          <p className='text-base font-light font-roboto text-gray-500 dark:text-gray-400'>
                            <time dateTime='2022-02-08' title='February 8th, 2022'>
                              {elements.node.createdAt.slice(0,4)}
                            </time>
                          </p>
                        </div>
                      </div>
                    </address>
                    <h1 className='mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white'>
                      {elements.node.title}
                    </h1>
                  </header>
                  <p className='lead '>{elements.node.post}</p>
                </article>
              </div>
            </main>
          ))
        : null}
    </>
  );
};

export default csr;
