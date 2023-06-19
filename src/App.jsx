import React from "react";

import { WillReceiveProps } from "./will-receive-props/WillProps";

export const App = () => {
   return (
      <div>
         <h1>Hello session</h1>
         <WillReceiveProps data={12} />
      </div>
   );
};
