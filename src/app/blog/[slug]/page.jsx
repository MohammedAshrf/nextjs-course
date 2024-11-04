import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
// import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// export default async function getData(slug) {
//   // const res = await fetch(`http://localhost:3000/api/blog/${slug}`);
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   // console.log(res);
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }

export const generateMetadata = async ({ params }) => {
  const { slug } = await params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.body,
  };
};

export default async function SinglePostPage({ params }) {
  // async function getData(slug) {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/posts/${slug}`
  //   );

  //   if (!res.ok) {
  //     throw new Error("Something went wrong");
  //   }

  //   return res.json();
  // }

  const { slug } = await params;
  console.log("slug =>" + slug);
  console.log("params =>" + params);

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img ? (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      ) : (
        <p>no Image</p>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          {post.createdAt && (
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {post.createdAt.toString().slice(4, 16)}
              </span>
            </div>
          )}
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
}
