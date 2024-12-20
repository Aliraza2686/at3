
import './App.css';


import Toast from './components/templates/atoms/toast-custom/Toast';

import { ToastProvider } from './context/ToastContext';

import { RoutesManager } from './routes/routes-manager/RoutesManager';

function App() {
  return (
    <div>
          <ToastProvider>
          <Toast />
            <RoutesManager />
      </ToastProvider>
    </div>
  );
}

export default App;
