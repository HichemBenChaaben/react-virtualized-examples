import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import generatedData from './generatedData';
const data = generatedData(1000);
ReactDOM.render(<App data={data} />, document.getElementById('root'));
registerServiceWorker();
