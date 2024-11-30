/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getAllPost } from "prisma/post";

export const loader = async () => {
 const postList = await getAllPost();
 return postList;
};

export default function PostLists() {
 const data: any = useLoaderData();
 return (
   <div>
     <h1>Posts Lists</h1>
     {/* <Link to="/posts/new">
       <button>Create Post</button>
     </Link> */}

     {data.map((post: any) => {
       return (
         <Link to={`/posts/${post.id}`} key={post.id}>
           <h2>
             {post.title} {post.description}
           </h2>
         </Link>
       );
     })}
     <Outlet />
   </div>
 );
}