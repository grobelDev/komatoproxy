import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function BlogSections() {
  return (
    <DarkBody className='bg-gray-800'>
      {/* <div>Hello World</div> */}
      <BlogSectionsV2></BlogSectionsV2>
    </DarkBody>
  );
}

function BlogSectionsV2() {
  return (
    <div>
      <div class='bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
        <div class='relative max-w-lg mx-auto lg:max-w-7xl'>
          <div>
            <h2 class='text-3xl leading-9 tracking-tight font-extrabold text-white sm:text-4xl sm:leading-10 '>
              Stories
            </h2>
            <div class='mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center'>
              <p class='text-xl leading-7 text-gray-300'>
                Get weekly stories in your inbox.
              </p>
              <form class='mt-6 flex lg:mt-0 lg:justify-end'>
                <input
                  aria-label='Email address'
                  type='email'
                  required
                  class='appearance-none w-full px-4 py-2 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out lg:max-w-xs'
                  placeholder='Enter your email'
                />
                <span class='ml-3 flex-shrink-0 inline-flex rounded-md shadow-sm'>
                  <button
                    type='button'
                    class='inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:border-indigo-400 focus:shadow-outline-indigo active:bg-indigo-500 transition ease-in-out duration-150'
                  >
                    Notify me
                  </button>
                </span>
              </form>
            </div>
          </div>
          <div class='mt-6 grid gap-16 border-t-2 border-gray-100 pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12'>
            <div>
              <p class='text-sm leading-5 text-gray-300'>
                <time datetime='2020-03-16'>Mar 16, 2020</time>
              </p>
              <a href='#' class='block'>
                <h3 class='mt-2 text-xl leading-7 font-semibold text-white'>
                  Boost your conversion rate
                </h3>
                <p class='mt-3 text-base leading-6 text-gray-300'>
                  Illo sint voluptas. Error voluptates culpa eligendi. Hic vel
                  totam vitae illo. Non aliquid explicabo necessitatibus unde.
                  Sed exercitationem placeat consectetur nulla deserunt vel.
                  Iusto corrupti dicta.
                </p>
              </a>
              <div class='mt-3'>
                <a
                  href='#'
                  class='text-base leading-6 font-semibold text-indigo-500 hover:text-indigo-400 transition ease-in-out duration-150'
                >
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class='text-sm leading-5 text-gray-300'>
                <time datetime='2020-03-10'>Mar 10, 2020</time>
              </p>
              <a href='#' class='block'>
                <h3 class='mt-2 text-xl leading-7 font-semibold text-white'>
                  How to use search engine optimization to drive sales
                </h3>
                <p class='mt-3 text-base leading-6 text-gray-300'>
                  Optio cum necessitatibus dolor voluptatum provident commodi
                  et. Qui aperiam fugiat nemo cumque.
                </p>
              </a>
              <div class='mt-3'>
                <a
                  href='#'
                  class='text-base leading-6 font-semibold text-indigo-500 hover:text-indigo-400 transition ease-in-out duration-150'
                >
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class='text-sm leading-5 text-gray-300'>
                <time datetime='2020-02-12'>Feb 12, 2020</time>
              </p>
              <a href='#' class='block'>
                <h3 class='mt-2 text-xl leading-7 font-semibold text-white'>
                  Improve your customer experience
                </h3>
                <p class='mt-3 text-base leading-6 text-gray-300'>
                  Cupiditate maiores ullam eveniet adipisci in doloribus nulla
                  minus. Voluptas iusto libero adipisci rem et corporis.
                </p>
              </a>
              <div class='mt-3'>
                <a
                  href='#'
                  class='text-base leading-6 font-semibold text-indigo-500 hover:text-indigo-400 transition ease-in-out duration-150'
                >
                  Read full story
                </a>
              </div>
            </div>
            <div>
              <p class='text-sm leading-5 text-gray-300'>
                <time datetime='2020-01-29'>Jan 29, 2020</time>
              </p>
              <a href='#' class='block'>
                <h3 class='mt-2 text-xl leading-7 font-semibold text-white'>
                  Writing effective landing page copy
                </h3>
                <p class='mt-3 text-base leading-6 text-gray-300'>
                  Ipsum voluptates quia doloremque culpa qui eius. Id qui id
                  officia molestias quaerat deleniti. Qui facere numquam autem
                  libero quae cupiditate asperiores vitae cupiditate. Cumque id
                  deleniti explicabo.
                </p>
              </a>
              <div class='mt-3'>
                <a
                  href='#'
                  class='text-base leading-6 font-semibold text-indigo-500 hover:text-indigo-400 transition ease-in-out duration-150'
                >
                  Read full story
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogSectionsArchive() {
  return (
    <div class='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8'>
      <div class='absolute inset-0'>
        <div class=' h-1/3 sm:h-2/3'></div>
      </div>
      <div class='relative max-w-7xl mx-auto'>
        <div class='text-center'>
          <h2 class='text-3xl leading-9 tracking-tight font-extrabold text-white sm:text-4xl sm:leading-10'>
            From the blog
          </h2>
          <p class='mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-300 sm:mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div class='mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none'>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80'
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Blog
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    Boost your conversion rate
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Architecto accusantium praesentium eius, ut atque fuga
                    culpa, similique sequi cum eos quis dolorum.
                  </p>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='#'>
                    <img
                      class='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a href='#' class='hover:underline'>
                      Roel Aufderhar
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-500'>
                    <time datetime='2020-03-16'>Mar 16, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    Video
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    How to use search engine optimization to drive sales
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                    dolore. Adipisci tempora aut inventore optio animi., tempore
                    temporibus quo laudantium.
                  </p>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='#'>
                    <img
                      class='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a href='#' class='hover:underline'>
                      Brenna Goyette
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-500'>
                    <time datetime='2020-03-16'>Mar 16, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class='flex flex-col rounded-lg shadow-lg overflow-hidden'>
            <div class='flex-shrink-0'>
              <img
                class='h-48 w-full object-cover'
                src='https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
                alt=''
              />
            </div>
            <div class='flex-1 bg-white p-6 flex flex-col justify-between'>
              <div class='flex-1'>
                <p class='text-sm leading-5 font-medium text-indigo-600'>
                  <a href='#' class='hover:underline'>
                    {' '}
                    Case Study
                  </a>
                </p>
                <a href='#' class='block'>
                  <h3 class='mt-2 text-xl leading-7 font-semibold text-gray-900'>
                    Improve your customer experience
                  </h3>
                  <p class='mt-3 text-base leading-6 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint harum rerum voluptatem quo recusandae magni placeat
                    saepe molestiae, sed excepturi cumque corporis perferendis
                    hic.
                  </p>
                </a>
              </div>
              <div class='mt-6 flex items-center'>
                <div class='flex-shrink-0'>
                  <a href='#'>
                    <img
                      class='h-10 w-10 rounded-full'
                      src='https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                      alt=''
                    />
                  </a>
                </div>
                <div class='ml-3'>
                  <p class='text-sm leading-5 font-medium text-gray-900'>
                    <a href='#' class='hover:underline'>
                      Daniela Metz
                    </a>
                  </p>
                  <div class='flex text-sm leading-5 text-gray-500'>
                    <time datetime='2020-03-16'>Mar 16, 2020</time>
                    <span class='mx-1'>&middot;</span>
                    <span>6 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DarkBody = styled.div`
  // background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
