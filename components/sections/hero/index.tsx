
const Hero = () => {
  return (
    <section className="relative py-10 px-4 lg:px-2 bg-sand/70">
      <div className="flex flex-col items-center text-5xl text-black lg:text-9xl leading-[1] font-carlo">
        <h3 className="uppercase">self taught</h3>
        <h3 className="uppercase">programmer.</h3>
      </div>

      <div className="pt-10 text-xl text-center underline libre underline-offset-8 font-libre">
        <h2>passionate about</h2>
      </div>

      <div className="flex flex-col gap-10 pt-10 lg:flex-row lg:gap-16 lg:justify-center lg:items-start lg:px-24">
        {/* hero left paragraphs divs */}
        <div className="flex flex-col gap-10 max-w-xs text-xs italic tracking-widest lg:gap-4 lg:text-sm leading-[1.4em]">
          <p className="">
            <span className="font-extrabold">Programming</span> ipsum dolor sit
            amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>

          <p className="">
            <span className="font-extrabold">Human</span> ipsum dolor sit amet,
            qui minim labore adipisicing minim sint cillum sint consectetur
            cupidatat.
          </p>
        </div>

        {/* hero right paragraphs div */}
        <div className="flex flex-col gap-10 max-w-xs text-xs italic tracking-widest lg:gap-4 lg:text-sm leading-[1.4em]">
          <p className="">
            <span className="font-extrabold">Books</span> ipsum dolor sit amet,
            qui minim labore adipisicing minim sint cillum sint consectetur
            cupidatat. jfdkjfdsfoewiwjf
          </p>

          <p className="">
            <span className="font-extrabold">Philosophy</span> ipsum dolor sit
            amet, qui minim labore adipisicing minim sint cillum sint
            consectetur cupidatat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
