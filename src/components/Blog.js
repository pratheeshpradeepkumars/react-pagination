import React, { useState, useEffect } from "react";
import axios from "axios";
import Posts from "./Posts";
import Pagination from "./Pagination";

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  // Change page
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    topFunction();
  };

  //Previous page
  const prev = () => {
    setCurrentPage(currentPage - 1);
    topFunction();
  };

  // Next page
  const next = () => {
    setCurrentPage(currentPage + 1);
    topFunction();
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-info text-white mb-3">
                <div className="text-center">
                  <img
                    className=""
                    src="https://alligator.io/images/logos/js-logo.svg"
                    alt=""
                    style={{ width: "100px", background: "#3c3c3c" }}
                  />
                </div>
                <h1 className="display-4 text-center">
                  Javascript Tips and Tricks
                </h1>
              </div>
            </div>
          </div>
          <Posts posts={currentPosts} loading={loading} />
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
            prev={prev}
            next={next}
          />
        </div>
      </div>
    </div>
  );
}

export default Blog;
