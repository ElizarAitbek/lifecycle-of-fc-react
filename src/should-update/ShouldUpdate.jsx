import React from "react";

// ** shouldComponentUpdate функционалдык react-та, memo болуп саналат

export const ShouldUpdate = React.memo(({ firstProp, secondProp }) => {
   return (
      <div>
         <h1>{firstProp}</h1>
         <p>{secondProp}</p>
      </div>
   );
});
