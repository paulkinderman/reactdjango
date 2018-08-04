import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const wrapper = document.getElementById('app');                                               
//wrapper ? console.log('here') : null;                                                                                            

wrapper ? ReactDOM.render(<App />, wrapper) : null;