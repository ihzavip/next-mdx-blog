import MainLayout from '@/components/layout';
import { MDXComponents } from '@/components/MDXComponents';
import CTA from '@/components/sections/cta';
import SEO from '@/components/sections/seo';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import 'highlight.js/styles/atom-one-dark.css';
import { getPostFromSlug, getSlugs } from 'lib/mdx';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from 'pages/page';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import { IPostMeta } from 'types';
import Image from 'next/image'

interface IPostPage {
  post: {
    source: MDXRemoteSerializeResult<Record<string, unknown>>;
    meta: IPostMeta;
  };
}

const PostPage: NextPageWithLayout<IPostPage> = ({ post }) => {
  const router = useRouter();
  return (
    <>
      <SEO title={`/images/${post.meta.title}`} urlImage={post.meta.image} />
      <section className="py-10 px-10">
        <div className="px-4 mx-auto">
          <div
            onClick={() => router.back()}
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <ChevronLeftIcon className="h-4" />
            <span className="font-normal text-base tracking-wider">Go back</span>
          </div>
          <div className="px-8 pb-20 ">
            <div className="py-16">
              <h1 className="tracking-wider mb-28 font-light leading-[100%] text-6xl text-center mx-auto">{post.meta.title}</h1>
              <p className="mb-2 italic font-normal text-[10px] tracking-widest text-charcoal/80">
                {post.meta.date.split(' ').slice(0, 4).join(' ')}
              </p>
              <div className="overflow-hidden relative w-full h-96 mb-5">
                <Image
                  src={`${post.meta.image || '/images/fast-next-js.png'}`}
                  alt="Some random blog"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className='mt-16 font-light leading-7 tracking-wider text-base max-w-2xl text-left mx-auto'>
              <MDXRemote {...post.source} />
            </div>
            {/* <MDXRemote {...post.source} components={MDXComponents} /> */}
          </div>
        </div>
      </section>

    </>
  );
};

export default PostPage;

PostPage.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
