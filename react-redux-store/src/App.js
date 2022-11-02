import "./App.css";
import Header from "./containers/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetail";
import ProductComponent from "./containers/ProductComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          {/* <Switch> */}
          <Route path="/hello" element={<ProductListing/>} />
          <Route path="/product/:productId" element={<ProductDetails/>} />
          <Route>4o4 not found</Route>
          {/* </Switch> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
