import { GetStaticProps } from 'next';
import Link from "next/link"
import Image from "next/image"
import { getAllPosts } from 'lib/mdx';
import { IPost } from "types"
import Header from '@/components/navigation/header';
import Footer from '@/components/navigation/footer';


interface Props {
  posts: IPost[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default function PostsList({ posts }: Props) {
  return (
    <>
      <Header />
      <section className='pt-20 pb-32 px-20'>
        <h2 className="mb-6 text-5xl font-light tracking-wider text-charcoal">All Articles</h2>
        <ul className='flex flex-col gap-10'>
          {posts.map((post, index) => (
            <Link href={`/posts/${post.meta.slug}`}>
              <li key={index} className='flex border-b py-10 border-charcoal justify-between text-charcoal items-start hover:cursor-pointer '>
                <div className='space-y-8 max-w-sm font-normal '>
                  <h2 className='text-xl tracking-wide leading-[120%]'>{post.meta.title}</h2>
                  <p className='text-sm font-light leading-6'>{post.meta.excerpt}</p>
                  <p className='text-[10px] text-charcoal/90'>{post.meta.date.slice(0, 15)}</p>
                </div>
                <div className="overflow-hidden relative w-96 h-72 mb-5">
                  <Image
                    src={`${post.meta.image || '/images/fast-next-js.png'}`}
                    alt={post.meta.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </li>
            </Link>

          ))}
        </ul>
      </section>
      <Footer />

    </>
  );
}
