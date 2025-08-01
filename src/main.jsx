import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout.jsx';
import SelectedPopularitem from './routes/SelectedPopularitem.jsx';
import store from './app/store'
import { Provider } from 'react-redux'
import Cart from './routes/Cart.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<App />} />      
        <Route path="/SelectedPopularitem/:id" element={<SelectedPopularitem />}/>
        <Route path='/Cart' element={<Cart />}/>
      </Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  </StrictMode>
)
