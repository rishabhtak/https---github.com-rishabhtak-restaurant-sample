import '../src/assets/scss/main.scss';
//import '../src/assets/scss/variables.scss';
import {
  createBrowserRouter
} from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import Home from './components/Home/Index';
import Menu from './components/Menu/Index'
import Layout from './components/Layout';
import AboutUs from './components/AboutUs/Index';
import ContactUs from './components/ContactUs/Index';
import BookingTable from './components/BookingTable/Index';
const App = createBrowserRouter([
  {
    element: <Layout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/aboutus",
      element: <AboutUs />,
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    {
      path: "/bookingtable",
      element: <BookingTable />
    }
    ]
  },
  {
    element: <Layout />,
    children: [{
      path: "/menu",
      element: <Menu />,
    },]
  }
]);



export default App;
