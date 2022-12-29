import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
//import store from './redux/store';



// render version react-18
ReactDOM.createRoot(document.getElementById('root'))
.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
reportWebVitals();



// ReactDOM.render(
//   // <BrowserRouter>
//   //   <Provider store={store}>
//   //     <App />
//   //   </Provider>
//   // </BrowserRouter>,

//     <BrowserRouter>
//       <App></App>
//     </BrowserRouter>,

//   // <Provider>
//   //   <App/>
//   // </Provider>,

//   document.getElementById('root')
// );


// reportWebVitals();
