import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Providers from './contexts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Providers>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Providers>
);

