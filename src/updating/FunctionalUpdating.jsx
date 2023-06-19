import React, { useEffect, useState } from "react";

export const FunctionalUpdating = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      console.log("Компонент орнотулду / Mounting!");

      return () => {
         console.log("Компонент ажыратылды / Unmounting!");
      };
   }, []);

   useEffect(() => {
      console.log("Өзгөрүүлөрдүн көрсөткүчү: ", count);
   }, [count]);

   // ** Бул жердеги useEffect-тин көз карандычылык массивинде,
   // ** жаңылоочу өзгөрмө (variabele) салынып турат, ошонун ичиндеги маалыматка жараша
   // ** компонентибиз өзгөрөт. Башкача update-тин ыкмаларын колго ала албайт экенбиз.

   const handleClick = () => {
      setCount(count + 1);
   };

   return (
      <div>
         <h1>Биздин сонун компонент</h1>
         <p>Эсепчинин саны: {count}</p>
         <button onClick={handleClick}>Көбөйтүү</button>
      </div>
   );
};
