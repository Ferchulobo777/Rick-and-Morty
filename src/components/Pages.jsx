import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Pages = ({ quantyPages, page, setPage }) => {
  return (
    <div className='getPages'>
      <div className='btn__pages'>
        {page > 1 && (
          <>
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => setPage(page - 1)}
            />
            <FontAwesomeIcon
              icon={faChevronLeft}
              onClick={() => setPage(page - 1)}
            />
          </>
        )}
      </div>
      <p>
        {page} de {quantyPages}
      </p>
      <div className='btn__pages'>
        {page < quantyPages && (
          <>
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => setPage(page + 1)}
            />
            <FontAwesomeIcon
              icon={faChevronRight}
              onClick={() => setPage(page + 1)}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Pages;