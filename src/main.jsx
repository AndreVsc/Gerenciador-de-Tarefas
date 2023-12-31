// Css
import './index.css';

// React + Router
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Paginas
import App from './app/App.jsx';
import ErrorPage from './pages/error/ErrorPage.jsx';
import PaginaInicial from './pages/inicial/PaginaInicial';
import PaginaEstoque from './pages/estoque/PaginaEstoque';
import PaginaHistorico from './pages/historico/PaginaHistorico';
import Detalhes from './components/Detalhes/Detalhes'

const router = createBrowserRouter([
  {
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [{
      path:"/",
      element: <PaginaInicial/>
    },
    {
      path:"historico",
      element: <PaginaHistorico/>
    },
    {
      path:"estoque",
      element: <PaginaEstoque/>
    },
    {
      path:"detalhes/:id",
      element: <Detalhes/>
    }
  ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
