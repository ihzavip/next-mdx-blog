import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IPostMeta } from 'types';

interface ILatestPosts {
  postsMeta: IPostMeta[];
}

const LatestPosts: React.FC<ILatestPosts> = ({ postsMeta }) => {
  return (
    <section className="pb-24">
      <div className="mx-auto">
        <h2 className="mb-16 text-5xl font-light tracking-wider text-charcoal">Publications</h2>
        <div className='grid grid-cols-2 gap-y-16 gap-x-10 place-content-center '>
          {postsMeta?.map((meta) => (
            <div key={meta.slug} className="flex relative border-b border-charcoal flex-col items-start ">
              <div className="overflow-hidden relative w-full h-72 mb-5">
                <Image
                  src={`${meta.image || '/images/fast-next-js.png'}`}
                  alt="Some random blog"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="flex flex-col space-y-2 ">
                <Link href={`/posts/${meta.slug}`}>
                  <a className="hover:underline text-lg pb-12 font-normal leading-[120%] text-black ">{meta.title}</a>
                </Link>

                <p className="text-xs absolute bottom-1 font-roboto text-charcoal/90 italic">{meta.date.split(' ').slice(0, 4).join(' ')}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-12'>
          <Link href={`/articles`}>
            <a className='text-sm bg-charcoal uppercase py-3 px-6 text-center text-white font-light tracking-wider '>
              more articles
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
