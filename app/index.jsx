import alt from './libs/alt'
import storage from './libs/storage'
import persist from './libs/persist'

import 'font-awesome/css/font-awesome.css'
import './main.scss'

import React from 'react'
import { render } from 'react-dom'
import App from './components/App.jsx'

persist(alt, storage, 'app')

render(<App />, document.getElementById('app'))
