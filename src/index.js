import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './variable.css'
import './style.css'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax';
import { AppProvider } from './context/app_context';

ReactDOM.render(
    <React.StrictMode>
        <AppProvider>
            <ParallaxProvider>
                <App />
            </ParallaxProvider>
        </AppProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
