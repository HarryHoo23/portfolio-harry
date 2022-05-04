import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './variable.css'
import './style.css'
import App from './App'
import { ParallaxProvider } from 'react-scroll-parallax'

ReactDOM.render(
    <React.StrictMode>
        <ParallaxProvider>
            <App />
        </ParallaxProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
