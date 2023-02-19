import Image from 'next/image';

const CTA = () => {
  return (
    <section className="relative py-44 md:py-20 min-h-[40vh]">
      <Image
        src="/images/bg.avif"
        alt="Call to action"
        layout="fill"
        objectFit="cover"
      />
      <div className="container flex absolute top-1/2 left-1/2 flex-col justify-center px-4 mx-auto w-full h-full transform -translate-x-1/2 -translate-y-1/2 md:px-10">
        <h5 className="text-2xl font-semibold w-full md:w-[32%] mb-4">
          Get all of our updates directly to your inbox. Sign up for our
          newsletter.
        </h5>
        <div className="flex flex-col gap-2 md:flex-row md:items-center">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="block px-4 h-10 bg-white rounded-md border-2 border-slate-200"
          />

          <button
            type="submit"
            className="px-4 h-10 text-white bg-pink-600 rounded-md border-2 border-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
