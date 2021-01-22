import axios from "axios";
import getAllBlogs from "../../contentstack/queries/getAllBlogs";
import getBlogById from "../../contentstack/queries/getBlogById";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import Link from "next/link";
import blog from "../../styles/blog.module.css";

export default function Blog(props) {
  return (
    <>
      <Header />
      <div className={blog.back}>
        <div className={blog.blogs}>
          <div className={blog.container}>
            <h1>{props.blogs.blog_title}</h1>
            <div className={blog.banner}>
              <img
                src={props.blogs.blog_image.url}
                alt="banner"
                className={blog.image}
              />
            </div>
            <p className={blog.content}>{props.blogs.blog_content}</p>
          </div>
          <div className={blog.aside}>
            <div className={blog.border}>
              <h3>OTHER GAMES</h3>
              {props.blogs.related_links.map((link, index) => {
                return (
                  <div key={index}>
                    <Link href={link.related_links[0].uid}>
                      <p>{link.blog_title}</p>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export const getStaticProps = async (context) => {
  let data = await getBlogById(context.params.id);
  return {
    props: {
      blogs: { ...data },
    },
  };
};
export const getStaticPaths = async () => {
  let data = await getAllBlogs("blog_shaaggy");
  let paths = data[0].map((blogs) => {
    return {
      params: {
        id: `${blogs.uid}`,
      },
    };
  });
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
};
