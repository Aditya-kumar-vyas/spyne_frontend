import { BrowserRouter as Router , Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import ProductCreationPage from "./pages/ProductCreationPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";
function App() {
  return (
   <Router>
    <Navbar/>
      <Routes>
           <Route path="/" element={<LoginPage></LoginPage>}/>
           <Route path="/products" element={<ProductListPage />} />
           <Route path="/products/new" element={<ProductCreationPage />}/>
           <Route path="/products/:id" element={<ProductDetailPage />} />
      </Routes>
   </Router>
  );
}

export default App;
