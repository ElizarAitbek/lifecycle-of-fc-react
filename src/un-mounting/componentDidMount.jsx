import React, { useEffect } from "react";

// ? Mounting - бул компоненттин түзүү жанa баракчага чыгаруу процесси.
// ? Mounting бүткүл react-тын жашоо циклинде бир гана жолу аткарылат.

export const ComponentDidMount = () => {
   useEffect(() => {
      // ** Монтаждалып бүткөн соң аткарылуучу нерсе
      console.log("Компонент орнотулду / Mounting!");

      // **  Компонент ажыратылып жаткан учурда чакырылуучу функция
      return () => {
         console.log("Компонент ажыратылды / Unmounting!");
      };

      // ** көз карандычылык массиви жок болгон
      // ** useEffect()-ти, componentDidUnmount деп эсептесек болот экен
   }, []);

   return (
      // ** бул return-да, render() деген ыкмасы көрсөтүлгөн
      <div>
         <h1>Биздин сонун компонент</h1>
      </div>
   );
};
