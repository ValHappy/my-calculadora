import React from 'react';
import './App.css';
import Button from '../Button/Button';
import Display from '../Display/Display';

function App() {

  function handleNumber(number) {
    //Propiedades para lectura de un componente grande a uno mas pequeño
    console.log(number);

  };


  return (
    <div className="App">

      <title> Calculadora </title>

      <Display formula="10 + 20" current="30" />

      <section className="Keyboard">
        <Button type="controller" value="CE" />
        <Button type="controller" value="C" />
        <Button type="controller" value="◁" />
        <Button type="operation" value="÷" />

        <Button type="number" value="7" onClick={handleNumber} />
        <Button type="number" value="8" onClick={handleNumber} />
        <Button type="number" value="9" onClick={handleNumber} />
        <Button type="operation" value="x" />

        <Button type="number" value="4" onClick={handleNumber} />
        <Button type="number" value="5" onClick={handleNumber} />
        <Button type="number" value="6" onClick={handleNumber} />
        <Button type="operation" value="-" />

        <Button type="number" value="1" onClick={handleNumber} />
        <Button type="number" value="2" onClick={handleNumber} />
        <Button type="number" value="3" onClick={handleNumber} />
        <Button type="operation" value="+" />

        <Button type="controller" value="±" />
        <Button type="number" value="0" onClick={handleNumber} />
        <Button type="controller" value="," />
        <Button type="operation" value="=" />
      </section>
    </div>
  );
}

export default App;
