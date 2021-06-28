import React from "react";
import { Suspense } from "react";
import Preloader from '../components/common/Preloader/Preloader';

export const WithSuspense = (Component) => {
      
      return (<Suspense fallback={<Preloader/>}>
         <Component />
      </Suspense>)
};

// export default WithSuspense