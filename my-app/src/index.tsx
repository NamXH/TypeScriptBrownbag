import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hi from './components/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Hi name="TypeScript" enthusiasmLevel={10} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
