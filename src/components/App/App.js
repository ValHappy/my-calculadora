import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

function App() {
  //Decontruir cun arreglo ↓
  const [currentDisplay, setCurrentDisplay] = React.useState('0');
  const [formulaDisplay, setFormulaDisplay] = React.useState('');
  const [isReady, setIsReady] = React.useState(true);
  const [result, setResult] = React.useState(false);

  function handleNumber(number) {
    //Propiedades para lectura de un componente grande a uno mas pequeño

    //Si solo hay 0 en el current
    if (currentDisplay === '0') {
      //Se reemplaza el 0 con el primer número
      setCurrentDisplay(number);
    } else {
      //Sino, concatena los numeros
      setCurrentDisplay(currentDisplay + number);
    }
    //Aviso si estamos listos para operar
    setIsReady(true);
  };


  function handleOperation(operation) {
    //Solo si estamos listos para operar
    if (isReady) {
      //Concatenamos la operación con la sig.
      setFormulaDisplay(formulaDisplay + '' + currentDisplay + '' + operation);

      if (result === false) {
        setResult(parseFloat(currentDisplay));
      } else {
        setResult(operate(result, formulaDisplay.substr(-1), currentDisplay));
      }
      //Devolvemos el valor del Display a 0
      setCurrentDisplay('0');
      //Avisamos que no estamos listos
      setIsReady(false);
    }
  }

  function handleEquals() {
    setResult(operate(result, formulaDisplay.substr(-1), currentDisplay));
    setFormulaDisplay('');
    setCurrentDisplay(0);
    setIsReady(false);
  }

  return (
    <div className="App">

      <title> Calculadora </title>

      <Display
        formula={formulaDisplay}
        current={isReady ? currentDisplay : result} />

      <section className="Keyboard">
        <Button type="controller" value="CE" />
        <Button type="controller" value="C" />
        <Button type="controller" value="◁" />
        <Button type="operation" value="÷" onClick={handleOperation} />

        <Button type="number" value="7" onClick={handleNumber} />
        <Button type="number" value="8" onClick={handleNumber} />
        <Button type="number" value="9" onClick={handleNumber} />
        <Button type="operation" value="x" onClick={handleOperation} />

        <Button type="number" value="4" onClick={handleNumber} />
        <Button type="number" value="5" onClick={handleNumber} />
        <Button type="number" value="6" onClick={handleNumber} />
        <Button type="operation" value="-" onClick={handleOperation} />

        <Button type="number" value="1" onClick={handleNumber} />
        <Button type="number" value="2" onClick={handleNumber} />
        <Button type="number" value="3" onClick={handleNumber} />
        <Button type="operation" value="+" onClick={handleOperation} />

        <Button type="controller" value="±" />
        <Button type="number" value="0" onClick={handleNumber} />
        <Button type="controller" value="," />
        <Button type="operation" value="=" onClick={handleEquals} />
      </section>
    </div>
  );
}

function operate(a, operation, b) {
  b = parseFloat(b)
  switch (operation) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case 'x':
      return a * b;

    case '÷':
      return a / b;

    default:
      return b;
  }
}
export default App;
