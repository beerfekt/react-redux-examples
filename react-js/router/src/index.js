import React from 'react';
import { render } from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './application/components/app'


render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,
    document.getElementById('root')
)