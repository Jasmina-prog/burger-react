import { useState } from "react";
import "./App.scss";
import Button from "./Button";
import Greens from "./Greens";
import Cheese from "./Cheese";
import Meat from "./Meat";
import Tomato from "./Tomato";


function App() {
  const [greens, setGreens] = useState(0);
  const [cheese, setCheese] = useState(0);
  const [tomato, setTomato] = useState(0);
  const [meat, setMeat] = useState(0);
  const [sum, setSum] = useState(0)

  const greensInc = () => {
    setGreens(greens + 1);
    console.log(typeof span);
  };

  const greensDec = () => {
    if (greens > 0) {
      setGreens(greens - 1);
    }
  };

  const cheeseInc = () => {
    setCheese(cheese + 1);
  };

  const cheeseDec = () => {
    if (cheese > 0) {
      setCheese(cheese - 1);
    }
  };


  const tomatoInc = () => {
    setTomato(tomato + 1);
  };

  const tomatoDec = () => {
    if (tomato > 0) {
      setTomato(tomato - 1);
    }
  };


  const meatInc = () => {
    setMeat(meat + 1);
  };

  const meatDec = () => {
    if (meat > 0) {
      setMeat(meat - 1);
    }
  };

  let arrGreens = new Array(greens).fill(null);
  let arrCheese = new Array(cheese).fill(null)
  let arrTomato = new Array(tomato).fill(null)
  let arrMeat = new Array(meat).fill(null)

  return (
    <>

    <div className="sum">
      <h1>Total sum: <span>{(greens*1) + (cheese*2) + (tomato*1) + (meat*5)}$</span></h1>
    </div>
    <section>

    
      <div className="menu">
        <div className="productline">
        <h2>Greens <span>1$</span></h2>
        <div className="btns">
        <Button name="Add" btnFn={greensInc} />
        <Button name="Remove" btnFn={greensDec} />
        </div>
        </div>

        <div className="productline">
        <h2>Cheese <span>2$</span></h2>
        <div className="btns">
        <Button name="Add" btnFn={cheeseInc} />
        <Button name="Remove" btnFn={cheeseDec} />
        </div>
        </div>

        <div className="productline">
        <h2>Tomato <span>1.5$</span> </h2>
        <div className="btns">
        <Button name="Add" btnFn={tomatoInc} />
        <Button name="Remove" btnFn={tomatoDec} />
        </div>
        </div>

        <div className="productline">
        <h2>Meat <span>4$</span></h2>
        <div className="btns">
        <Button name="Add" btnFn={meatInc} />
        <Button name="Remove" btnFn={meatDec} />
        </div>
        </div>
      </div>

      <div className="burger">
        <div className="bread top"></div>

        {arrGreens.map((value, key) => {
          return <Greens key={key} />;
        })}

        {arrCheese.map((value, key)=>{
          return <Cheese key={key}/>
        })}

        {arrTomato.map((value, key) => {
          return <Tomato key={key} />;
        })}

        {arrMeat.map((value, key) => {
          return <Meat key={key} />;
        })}


        <div className="bread bottom"></div>
      </div>
      </section>
    </>
  );
}

export default App;
