import Image from 'next/image';
import Link from 'next/link';

const FeaturedPost = () => {
  return (
    <section className="pb-24">
      <div className="flex justify-center items-center">
        <div className='flex flex-col border md:flex-row border-charcoal'>

          <div className="overflow-hidden relative w-96 h-96 md:h-80 lg:h-[70vh]">
            <Image
              src="/images/rest_5.jpg"
              layout="fill"
              alt="Featured Post"
              objectFit="cover"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-9 justify-center py-6 px-10 h-full text-center lg:py-12 max-w-[24rem]">
            <div className="space-y-2">
              <h3 className="text-2xl font-normal text-black">Just Give Up It's Meaningless</h3>
              <p className="text-[10px] font-roboto text-charcoal/80">
                10 Feb 2023
              </p>
            </div>
            <p className="text-left text-sm font-light leading-[150%]">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
            </p>

            <Link href="/posts/food-for-software-devs" prefetch={false}>
              <button
                type="button"
                className="text-sm underline uppercase text-black/90 decoration-black font-roboto underline-offset-8 tracking-[.2em]"
              >
                Baca
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section >


  )
}

export default FeaturedPost;
