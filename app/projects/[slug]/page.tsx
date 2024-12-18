import { MDXRemote } from 'next-mdx-remote/rsc';
import { Pluggable } from 'unified';

import '../../assets/github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';
import { Metadata } from 'next';
import { Title } from '@/app/components/title';

import EnlargeableImage from '../../components/image-modal';
import VideoPlayer from '../../components/video-player';

export async function generateStaticParams() {
  const paths = getAllPostPaths(true);

  return paths;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const workItem = getPostBySlug(params.slug, true);

  return {
    title: workItem?.meta.title,
    description: workItem?.meta.description,
    publisher: 'Tagir Sharipov',
    creator: 'Tagir Sharipov',
  };
}

type Params = {
  slug: string;
};

export default async function WorkItem({ params }: { params: Params }) {

  const post = getPostBySlug(params.slug, true);

  if (!post) return notFound();

  const { meta, content } = post;

  return (
    <main className="px-4 md:px-0">
      <Title as="h1" variant="primary">
        {meta.title}
      </Title>

      <section className="py-5">
        <article className="prose prose-lg">
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [rehypeHighlight, { languages: true }],
                ] as unknown as Pluggable[],
              },
            }}
            components={{EnlargeableImage, VideoPlayer}}
          />
        </article>
      </section>
    </main>
  );
}
