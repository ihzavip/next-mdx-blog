import Logo from '@/components/brand/logo';
import GitHubMark from '@/components/ui/github-mark';
import ThemeToggle from '@/components/ui/theme-toggle';
import Link from 'next/link';

const menuItems = [
  { label: 'Home', link: '/' },
  { label: 'Articles', link: '/' },
  { label: 'About', link: '/' },
];

const Header = () => {
  return (
    <section className="font-light text-xs tracking-widest ">
      <div className="container flex flex-wrap justify-between items-center py-10 mx-auto">
        <Logo />

        {/* menu */}
        <div className="flex items-center space-x-4">
          <div className="hidden items-center lg:flex">
            {menuItems.map((item, i) => (
              <div className="mr-2" key={i}>
                <Link href={item.link} prefetch={false}>
                  <a className="inline-block px-4 ">
                    {item.label}
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
