import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import data from './institutions.json'
import Institutions from './Institutions.jsx'

console.log(data);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <head><title>Institutions</title></head>
    <Institutions data ={data.institutions[0]}/>
    <Institutions data ={data.institutions[1]}/>
    <Institutions data ={data.institutions[2]}/>
  </React.StrictMode>,
)
