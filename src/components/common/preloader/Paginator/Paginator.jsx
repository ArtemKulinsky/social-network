import React from 'react';
import s from "./Paginator.module.css";

let Paginator = (props) => {
   let pagesCount = Math.min(Math.ceil(props.totalUsersCount / props.pageSize), 10);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   
   return (
      <div>
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
      </div>
      );
}

export default Paginator;