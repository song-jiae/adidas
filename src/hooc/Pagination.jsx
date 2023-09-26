import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li key={pageNumber}>
          <a
            href="#"
            className={pageNumber === currentPage ? 'active' : ''}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Pagination;