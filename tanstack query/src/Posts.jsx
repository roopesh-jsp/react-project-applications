import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { fetchPosts, postPost } from "./api/api";

export default function Posts() {
  const { data, isLoading } = useQuery({
    queryFn: fetchPosts,
    queryKey: ["posts"],
  });

  const { mutate, error, isError } = useMutation({
    mutationFn: postPost,
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutate({ event: e });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="enter post" name="title" id="" />
        <button>add</button>
      </form>
      {isLoading && <h1>loading....</h1>}
      {isError && console.log(error)}
      {!isLoading && (
        <div>
          {data.map((post) => (
            <div className="posts" key={post.id}>
              <h1>{post.title}</h1>
              <p>
                {post.tags.map((tag, idx) => (
                  <span key={idx}>{tag}</span>
                ))}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
