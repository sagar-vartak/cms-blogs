import getAllBlogs from "../contentstack/queries/getAllBlogs";
import styles from "../styles/blogs.module.css";

import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function blogs(props) {
  let blogs = props.blogs;
  return (
    <>
      <Header />
      <div className={styles.back}>
        <div className={styles.blogs}>
          {blogs.map((blogs, index) => {
            return (
              <Link href={"/blog/" + blogs.uid}>
                <div className={styles.container} key={index}>
                  <h1>{blogs.blog_title}</h1>
                  <div className={styles.banner}>
                    <img
                      src={blogs.blog_image.url}
                      alt="banner"
                      className={styles.image}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
export const getStaticProps = async () => {
  const blogs = await getAllBlogs("blog_shaaggy");
  return {
    props: { blogs: [...blogs[0]] },
  };
};
