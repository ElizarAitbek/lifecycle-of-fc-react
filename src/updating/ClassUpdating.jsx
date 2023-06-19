import React from "react";

class ClassUpdating extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         counter: 0,
      };
   }

   componentDidMount() {
      console.log("Компонент орнотулду!");
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.counter !== this.state.counter) {
         console.log("Компонент жаңыланды!");
      }
   }

   componentWillUnmount() {
      console.log("Компонент ажыратылды!");
   }

   handleClick = () => {
      this.setState({ counter: this.state.counter + 1 });
   };

   render() {
      return (
         <div>
            <h1>Биздин класстын компонентибиз</h1>
            <p>Эсепчинин саны: {this.state.counter}</p>
            <button onClick={this.handleClick}>Маанисин көбөйтүү</button>
         </div>
      );
   }
}

export default ClassUpdating;
