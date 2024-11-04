import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts, getUsers } from "@/lib/data";

// FETCH DATA WITH AN API

// export default
// async function getData() {
//   // const res = await fetch("http://localhost:3000/api/blog", {
//   //   next: { revalidate: 3600 },
//   // });
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }

export default async function BlogPage() {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();
  const users = await getUsers();
  console.log(posts);
  console.log(users);

  // const posts = [
  //   {
  //     id: "1",
  //     title: "title",
  //     body: "body",
  //     img: "https://images.pexels.com/photos/8755967/pexels-photo-8755967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "2",
  //     title: "title",
  //     body: "body",
  //     img: "https://images.pexels.com/photos/8755967/pexels-photo-8755967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "3",
  //     title: "title",
  //     body: "body",
  //     img: "https://images.pexels.com/photos/8755967/pexels-photo-8755967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: "4",
  //     title: "title",
  //     body: "body",
  //     img: "https://images.pexels.com/photos/8755967/pexels-photo-8755967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
