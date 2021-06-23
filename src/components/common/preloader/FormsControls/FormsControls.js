import React from 'react';
import s from "./FormsControls.module.css";

export const Element = (Element) => ({input, meta, ...props}) => {
   const hasError = (meta.error && meta.touched)

   return (
      <div className={s.textAreaContainer}>
         <Element {...input} {...props}
            className={s.textArea + " " + (hasError ? s.error : "")} />
         <span className={s.errorDescription}>{hasError ? meta.error : ""}</span>
      </div>
   )
}


// export const TextArea = ({input, meta, ...props}) => {
//    const hasError = (meta.error && meta.touched)

//    return (
//       <div className={s.textAreaContainer}>
//          <textarea {...input} {...props}
//             className={s.textArea + " " + (hasError ? s.error : "")} />
//          <span className={s.errorDescription}>{hasError ? meta.error : ""}</span>
//       </div>
//    )
// }

// export const Input = ({input, meta, ...props}) => {
//    const hasError = (meta.error && meta.touched)

//    return (
//       <div className={s.textAreaContainer}>
//          <input {...input} {...props}
//             className={s.textArea + " " + (hasError ? s.error : "")} />
//             {hasError && <span className={s.errorDescription}>{meta.error}</span>}
//          {/* <span className={s.errorDescription}>{hasError ? meta.error : ""}</span> */}
//       </div>
//    )
// }

