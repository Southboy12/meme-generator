import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

export default function Index() {
    return (
        <App />
    )
}

ReactDOM.createRoot(document.querySelector('#root')).render(<Index />)