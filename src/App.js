import './App.css';
import ResponsiveAppBar from './components/Appbar';
import { Routes, Route } from "react-router-dom";
import Main from './pages/main';
import Profile from './pages/profile';
import Registration from './pages/registration';
import Categories from './pages/categories';
import Admin from './pages/admin';
import Products from './pages/products';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/list" element={<Admin/>}/>
        <Route path="/produts" element={<Products/>}/>
      </Routes>
    </div>
  );
}

export default App;
