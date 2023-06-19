import React, { useState, useMemo } from "react";

function DerivedStateFromProps(props) {
   const [state, setState] = useState({});

   const memoizedValue = useMemo(() => {
      //? проспсторго карата эсептөө
      return props.value * 2;
   }, [props.value]);

   // ! кэшке сактап коёт экен sourse: https://habr.com/ru/articles/444276/
   // ! кэш реактта FiberNode-ко саталат экен

   if (state.someCondition) {
      //? абалды пропсторго карата өзгөртүү
      setState({ value: props.value });
   }

   return <div>{memoizedValue}</div>;
}

DerivedStateFromProps.getDerivedStateFromProps = (nextProps, prevState) => {
   //? абалды проспсторго жараша өзгөртүү
   if (nextProps.value !== prevState.value) {
      return { value: nextProps.value };
   }

   return null;
};

export default DerivedStateFromProps;
