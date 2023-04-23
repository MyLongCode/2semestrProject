import React from 'react'
import ReactDOM from 'react-dom/client';
import Router from './components/ui/Router';
import Header from './components/Header/Header'
ReactDOM.createRoot(document.getElementById('root')).
render(
    <React.StrictMode>
        <Header/>
        <Router/>
    </React.StrictMode>
)
