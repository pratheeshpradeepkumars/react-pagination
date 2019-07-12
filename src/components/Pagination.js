import React from "react";

const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
  prev,
  next
}) => {
  const pageNumbers = [];
  let disableClassNext = "";
  let disableClassPrev = "";
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  if (currentPage <= 1) {
    disableClassPrev = "disabled";
  }

  if (pageNumbers.length === currentPage) {
    disableClassNext = "disabled";
  }

  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <button
            className={`page-link btn`}
            onClick={() => prev()}
            disabled={disableClassPrev}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map(number => {
          let activeClass = "";
          if (currentPage === number) {
            activeClass = "active";
          }
          return (
            <li key={number} className={`page-item ${activeClass}`}>
              <button onClick={() => paginate(number)} className="page-link">
                {number}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className={`page-link btn`}
            onClick={() => next()}
            disabled={disableClassNext}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
