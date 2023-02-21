// import Logo from '@/components/brand/logo';

const Footer = () => {
  return (
    <footer className="">
      <div className="flex flex-col justify-between items-center px-4 mx-auto md:flex-row md:px-10 py-8 font-libre font-light tracking-[0.2em] uppercase text-charcoal text-[10px]">

        <div className="">Copyright &copy; ihza hasibuan {new Date().getFullYear()}  </div>

        <div className="">
          <a
            href="mailto:hasibuanihza@gmail.com"
            aria-label="email"
            className="hover:underline"
          >
            hasibuanihza@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
