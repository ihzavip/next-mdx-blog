const WebAbout = () => {
  return (
    <section className="py-12 px-6 h-full lg:px-20 bg-creamy/60">
      <div>
        <h3 className="text-3xl leading-9 text-left text-black lg:text-5xl inter">
          Blog ini akan menjadi catatan saya selama mengejar karir di industri
          teknologi.
        </h3>

        <div className="max-w-3xl lg:ml-20">
          <div className="flex flex-col gap-4 mt-12 text-sm leading-6 lg:flex-row lg:gap-12 lg:text-md lg:mt-22">
            <p className="">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nctetur et est culpa et culpa duis.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nctetur et est culpa et culpa duis.
            </p>
          </div>

          <a
            href="#"
            className="inline-block mt-6 text-sm underline uppercase text-black/90 decoration-black font-roboto underline-offset-8 tracking-[.2em]"
          >
            tentang saya
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebAbout;
