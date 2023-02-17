import Image from 'next/image';
import Link from 'next/link';

const FeaturedPost = () => {
  return (
    <section className="py-20">
      <div className="container border mx-auto flex flex-col md:flex-row md:items-center gap-4 px-4 md:px-10 ">

        <div className="relative rounded-lg w-full h-96 md:h-80 lg:h-[70vh] shadow-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
          <Image
            src="/images/rest_5.jpg"
            layout="fill"
            alt="Featured Post"
            objectFit="cover"
          />
        </div>
        <div className="w-full max-w-xs pb-6 md:pb-0">
          <h2 className="text-2xl font-bold">
            Code Fuel: The Importance of Food for Software Developers
          </h2>
          <p>January 01, 2023</p>


          <Link href="/posts/food-for-software-devs" prefetch={false}>
            <a className="rounded-lg py-2 px-4 text-white bg-pink-700 mt-10">
              Read More
            </a>
          </Link>
        </div>

      </div>
    </section >


  )
}

export default FeaturedPost;
