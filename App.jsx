import React  from 'react';
import './App.css';
import Second from './components/second';
import Third from './components/third';
import Four from './components/four';
import {F,K,H,G,I} from './components/first';
import Five from './components/five';
import Image from './components/image';
import Style from './components/style';



function App() {
   

  return (
    <>
      <p>HELOOOOOOOOOOOOOOOOO</p>
       {/* calling function */}
      <A/>

      <B/>

      <C/>

      <D/>

      <E/>

      <Html/>

      {/* calling components */}

      <Second/>
      <Third/>
      <Four/>
      <Five/>
      <F/>
      <K/>
      <H/>
      <G/>
      <I/>

      <Image/>
      <Style/>
    </>
  );
}

function A(){
  return(
    <>
      <p>Hello Siddhartho</p>
    </>
  );
}


function B(){
  return(
    <>
      <p>Hello Biswas</p>
    </>
  );
}

function C(){
  return(
    <>
      <p> Hello MSIT</p>
    </>
  )
}

function D(){
  return(
    <>
      <p>MCA</p>
    </>
  )
}

function E(){
  return(
    <>
      <p> HELLO </p>
    </>
  )
}

function Html(){
  return(
    <>
      <ol>
        <li>Siddhartho</li>
        <li> Biswas</li>


    
      </ol>

      <ol type='A'>
        <li>Msit</li>
        <li>MSIT</li>
      </ol>

      <ul type='circle'>
        <li>ki</li>

      </ul>
    </>
  )
}
export default App;
