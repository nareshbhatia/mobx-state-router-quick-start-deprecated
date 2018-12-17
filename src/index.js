import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import './index.css';
import App from './App';

// Enable strict mode for MobX. This disallows state changes outside of an action
configure({ enforceActions: true });

ReactDOM.render(<App />, document.getElementById('root'));
