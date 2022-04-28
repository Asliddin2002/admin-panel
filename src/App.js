import { useContext } from "react";
import {BrowserRouter ,Routes,Route} from "react-router-dom";
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import List from './pages/list/List.jsx'
import New from './pages/new/New.jsx'
import Single from './pages/single/Single.jsx'
import {userForm, productForm} from './FormSource'
// import './DarkMode/darkmode.scss'
import './index.scss'
// console.log(userForm)
import { Context } from "./context/Context.jsx";



function App() {
  const {darkmode} = useContext(Context)

  const title= "Yangi Foydalanuvchi qo`shish"
  const productTitle= "Yangi Mahsulot qo`shish"
  return (
    <div className= {darkmode ? "app " : "app "}>
    
      <BrowserRouter>
    <Routes>  
      <Route path="/" >
        <Route index element={<Home/>} />
        <Route path='login' element={<Login/>}/>
        <Route path='users'>
          <Route index element={<List/>}/>
          <Route path=':userId' element={<Single />}/>
          <Route path='new' element={<New data={userForm} title={title}/>}/>
        </Route>
        <Route path="products" >
          <Route index element={<List/>}/>
          <Route path=':productId' element={<Single />}/>
          <Route path='new' element={<New data={productForm} title={productTitle}/>}/>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
