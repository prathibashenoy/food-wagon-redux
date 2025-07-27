import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout.jsx';
import SelectedPopularitem from './routes/SelectedPopularitem.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />
        <Route path="/SelectedPopularitem/:id" element={<SelectedPopularitem />}/>
      </Route>
    </Routes>
  </BrowserRouter>,
)
