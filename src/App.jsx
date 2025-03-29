import { BrowserRouter,Routes,Route} from "react-router-dom";
// COMPONENTS & PAGES
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/FormsPages/Login";
import Signup from "./pages/FormsPages/Signup";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              index
              element={<HomePage />}
            />
            <Route 
              path="/login"
              element={<Login />}
            />
            <Route 
              path="/signup"
              element={<Signup />}
            />
            <Route 
              path="/admin-dashboard"
              element={<AdminDashboard />}
            />
            <Route 
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;