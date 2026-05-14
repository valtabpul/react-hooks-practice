import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import SmartCounter from './exercises/SmartCounter.tsx'
import RegisterForm from './exercises/RegisterForm.tsx'
import UserSearch from './exercises/UserSearch.tsx'
import UserListApi from './exercises/UserList.tsx'
import TodoApp from './exercises/TodoApp.tsx'
import Timer from './exercises/Timer.tsx'
import ShoppingCart from './exercises/ShoppingCart.tsx'
import ProductFilter from './exercises/ProductFilter.tsx'
import FocusInput from './exercises/FocusInput.tsx'
import TaskReducer from './exercises/TaskReducer.tsx'
import ThemeContextApp from './exercises/ThemeContextApp.tsx'
import AuthContextApp from './exercises/AuthContextApp.tsx'
import ContactForm from './exercises/ContactForm.tsx'
import PostList from './exercises/PostList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <div className="exercise-section"><SmartCounter/></div>
    <div className="exercise-section"><RegisterForm/></div>
    <div className="exercise-section"><UserSearch/></div>
    <div className="exercise-section"><TodoApp/></div>
    <div className="exercise-section"><UserListApi/></div>
    <div className="exercise-section"><Timer/></div>
    <div className="exercise-section"><ShoppingCart/></div>
    <div className="exercise-section"><ProductFilter/></div>
    <div className="exercise-section"><FocusInput/></div>
    <div className="exercise-section"><TaskReducer/></div>
    <div className="exercise-section"><ThemeContextApp/></div>
    <div className="exercise-section"><AuthContextApp/></div>
    <div className="exercise-section"><ContactForm/></div>
    <div className="exercise-section"><PostList/></div>
  </StrictMode>,
)
