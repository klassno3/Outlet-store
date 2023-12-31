import Account from "./pages/Account"

import Home  from "./pages/Home"
import Register from "./pages/Register"

import Login from "./pages/Login"
import ProductDetail from "./pages/ProductDetail"
import Navigation from "./component/Navigation"
import Footer from "./component/Footer"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./component/Sidebar"


function App () {
  

  const Layout = () => {
    return (
      <div className="">

        <Navigation />
        <Sidebar/>
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
          path: "/",
          element:<Home className="z-10"/>,
        },
         {
          path: "/login",
          element:<Login/>,
        },
       
         {
          path: "/product/:id",
          element:<ProductDetail/>,
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

