import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

function Blog() {
  const { loading, posts } = useContext(AppContext);
  return (
    <div className='w-11/12 h-11/12  max-w-[670px] flex flex-col mx-auto justify-center items-center mt-[30px] '>
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>No posts Found</div>
      ) : (
        posts.map((posts) => (
          <div key={posts.id} className='flex flex-col mb-10'>
            <p className='font-bold text-2xl'>{posts.title}</p>
            <p className='text-sm'>
              By <span className='italic'>{posts.author}</span>
              <span>{posts.catogry}</span>
            </p>
            <p className='text-sm'>postsed on {posts.date}</p>
            <p>{posts.content}</p>
            <div className='text-blue-600 italic'>
              {posts.tags.map((tag, index) => {
                return <span className='pr-2' key={index}>{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blog;
