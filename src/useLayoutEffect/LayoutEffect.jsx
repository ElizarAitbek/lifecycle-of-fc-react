import { useState, useLayoutEffect, useRef } from "react";

/*
   ? useLayoutEffect - бул хук, кыйыр таасирлер (side effect) үчүн колдонулат,
   ? иштеши useEffect-ке салыштырмалуу компонент экранга сүрөттөлгөн кийн эмес,
   ? сүрөттөлөр алдын ишке киерет.
*/
/*
   ? Кодонуучу өзгөрүүлөр экранга чыга элек учурунда эле бир нерсе кыла салуу үчүн пайдалуу болот экен
   ? Мисалы бир элементке, анимациадан мурун элементке фокус койгонго жардам берет. 
*/
export const LayoutEffect = () => {
   const [count, setCount] = useState(0);
   const ref = useRef(null);

   useLayoutEffect(() => {
      console.log(
         "Блоктун көлөмдөрү: ",
         ref.current.offsetWidth,
         ref.current.offsetHeight
      );
   });

   return (
      <div ref={ref}>
         <h1>Эсепчинин саны: {count}</h1>
         <button onClick={() => setCount(count + 1)}>Бирге чоңойтуу</button>
      </div>
   );
};
