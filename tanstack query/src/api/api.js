import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchPosts = async () => {
  const data = await fetch("http://localhost:3000/posts");
  const posts = await data.json();

  return posts;
};

export const postPost = async ({ event }) => {
  const Formdata = new FormData(event.currentTarget);
  const FormDataa = Object.fromEntries(Formdata);
  console.log(FormDataa);

  const data = await fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify(FormDataa),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data.json();
};
