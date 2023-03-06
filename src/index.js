import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContractsProvider } from './context/ContractState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContractsProvider>

    <App />

  </ContractsProvider>

);


