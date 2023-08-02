import Account from "./pages/Account"
import Cart from "./pages/Cart"
import Home  from "./pages/Home"
import Register from "./pages/Register"
import Search from "./pages/Search"
import Login from "./pages/Login"
import Product from "./pages/Product"
import Navigation from "./component/Navigation"
import Footer from "./component/Footer"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";


function App () {
  

  const Layout = () => {
    return (
      <div className="">

        <Navigation/>
        <Outlet/>
     <Footer/>
      </div>
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
        
         {
          path: "/account",
          element:<Account/>,
        },
         {
          path: "/cart",
          element:<Cart/>,
        },
         {
          path: "/",
          element:<Home className="z-10"/>,
        },
         {
          path: "/login",
          element:<Login/>,
        },
         {
          path: "/product",
          element:<Product/>,
        },
         {
          path: "/search",
          element:<Search/>,
        },
         {
          path: "/register",
          element:<Register/>,
        },
      ]
    
  },
]);
  return (
     
    <div className="" >
       <RouterProvider router={router} />
      
      </div> 
  );
}

export default App;

