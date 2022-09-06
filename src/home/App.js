
import Pricecard from '../components/pricecard/Pricecard';
import Servicecards from '../components/services/servicecards/Servicecards';
import Services from '../components/services/Services';
import Topbar from '../components/topbar/Topbar';
import {
   BrowserRouter,
   Routes,
   Route,
 } from "react-router-dom";
import './App.css';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Cart from '../components/cart/Cart';
import Reviews from '../components/Reviews/Reviews';
import Admin from '../Admin panel/Admin';
import Adminlogin from '../Admin panel/Adminlogin/Adminlogin';
import Adminregister from '../Admin panel/adminregister/Adminregister';
import Productpage from '../Admin panel/Productpage';
import Updatemenu from '../Admin panel/Updatemenu/Updatemenu';
import Productedit from '../Admin panel/productedit/Productedit';
import Mobilenavbar from '../components/topbar/mobile-navbar/Mobilenavbar';
import Order_token from '../components/order_token/Order_token';

function App() {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Register />} />
  <Route path="/login" element={<Login/>}/>
<Route path="/home/:id" element={<Services/>}/>
<Route path="/menu/:id" element={<Pricecard/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/reviews" element={<Reviews/>}/>
<Route path="/admin/:id" element={<Admin/>}/>
<Route path="/admin/register" element={<Adminregister/>}/>
<Route path="/admin/login" element={<Adminlogin/>}/>
<Route path="/admin/products/:id" element={<Productpage/>}/>
<Route path="/admin/menuupdate/:id" element={<Updatemenu/>}/>
<Route path="/admin/edit/:id" element={<Productedit/>}/>
<Route path="/ordertoken/:id" element={<Order_token/>}/>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
