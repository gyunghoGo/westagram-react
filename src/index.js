import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Login from './pages/Login/Login';
//import Main from './pages/main/main';

ReactDOM.render(    //render -> 함수를 실행해 주겠다는 것
  <React.StrictMode>
    {/* <App /> */}
    <Login />
    {/* <Main />   */}
  </React.StrictMode>,
  document.getElementById('root')
);

//html 내 id = root 에다가 App을 위치하겠다 라는 의미 