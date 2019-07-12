import React from "react";
import Gist from "super-react-gist";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map(post => (
        <li key={post.id} className="list-group-item mb-2">
          <h3 className="text header-border">{post.title}</h3>
          <footer class="blockquote-footer">{new Date().toDateString()}</footer>
          <p className="mt-3">{post.body}</p>
          <Gist url="https://gist.github.com/pratheeshpradeepkumars/ca650fd519437acdd30b4f6f87417df5" />
        </li>
      ))}
    </ul>
  );
};

export default Posts;
