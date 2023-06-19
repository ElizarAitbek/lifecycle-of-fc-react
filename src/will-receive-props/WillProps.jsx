import React, { useEffect, useState } from "react";

/*
    ? Өзү айтып тургандай эле, компонент пропсторду кабыл алабы деп турат. 
    ? Биздин учурда, useEffect, componentWillReceiveProps-ди аткарып жатат.
    ? Хуктун ичинде пропс өзгөргөнүн угуп жатат жана өзгөргөнүнө карата абалга салып жатат
*/

export const WillReceiveProps = (props) => {
   const [data, setData] = useState(props.data);

   useEffect(() => {
      console.log("hello");
      setData(props.data);
   }, [props.data]);

   return (
      <div>
         <h1>Биздин компонент</h1>
         <p>{data}</p>
      </div>
   );
};
