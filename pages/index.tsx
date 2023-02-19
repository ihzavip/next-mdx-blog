import MainLayout from '@/components/layout';
import CTA from '@/components/sections/cta';
import Hero from "@/components/sections/hero"
import HeroAlt from "@/components/sections/heroAlt"
import WebAbout from '@/components/sections/webAbout';
import FeaturedPost from '@/components/sections/featuredPost';
import LatestPosts from '@/components/sections/latestPosts';
import SEO from '@/components/sections/seo';
import { getAllPosts } from 'lib/mdx';
import { IPostMeta } from 'types';
import { NextPageWithLayout } from './page';

interface IHome {
  postsMeta: IPostMeta[];
}

const Home: NextPageWithLayout<IHome> = ({ postsMeta }) => {
  return (
    <>
      <main className='px-28'>
        <SEO />
        <HeroAlt />
        {/* <WebAbout/> */}
        <FeaturedPost />
        <LatestPosts postsMeta={postsMeta} />
        {/* <CTA /> */}
      </main>
    </>
  );
};
export default Home;

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export async function getStaticProps() {
  const postsMeta = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return { props: { postsMeta } };
}
