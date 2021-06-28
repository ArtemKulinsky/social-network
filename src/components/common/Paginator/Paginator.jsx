import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import s from "./Paginator.module.css";

let Paginator = (props) => {
   const [startPageNumber, changeStartPageNumber] = useState(1)

   let pagesCount = Math.ceil(props.totalItemsCount / props.maxItemsCount);
   let pagesToShowCount;

   if(pagesCount) {     //!Чтобы не показывало 1 страницу в момент запроса на сервер
      pagesToShowCount = Math.min(
         props.maxPagesToShowCount,
         Math.max(pagesCount - startPageNumber + 1, 1)
      );
   }

   let pages = [];
   for (let i = startPageNumber; i < startPageNumber + pagesToShowCount; i++) {
      pages.push(i);
   }

   const showPrevPages = (addingPages) => {
      changeStartPageNumber(Math.max(startPageNumber - addingPages, 1));
   };

   const showNextPages = (deductingPages) => {
      changeStartPageNumber(Math.min(startPageNumber + deductingPages, pagesCount));
   };

   return (
      <div>
         {
            startPageNumber > props.maxPagesToShowCount &&
                  <button onClick={() => showPrevPages(props.maxPagesToShowCount)}>Prev</button>
         }
         {pages.map((page) => {
            return (
               <span
                  className={page === props.currentPage ? s.selectedPage : ""}
                  onClick={() => {
                     props.onPageChanged(page);
                  }}
                  key={page - 1}
               >
                  {page}
               </span>
            );
         })}
         {
            pagesCount >= startPageNumber + props.maxPagesToShowCount &&
               <button onClick={() => showNextPages(props.maxPagesToShowCount)}>Next</button>
         }
      </div>
      );
}

export default Paginator;