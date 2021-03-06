'use strict';

import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';

// For interactions
injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('movie-db')
);