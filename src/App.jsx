import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
// COMPONENTS & PAGES
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/FormsPages/Login";
import Signup from "./pages/FormsPages/Signup";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import About from "./pages/About";
import DiaryDetails from "./components/DiaryDetails";

function App() {
  const { user } = useAuthContext(); // Ensure user is destructured properly

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              index
              element={user ? <HomePage /> : <Navigate to='/login' />} // Redirect to login if no user
            />
            <Route 
              path="/login"
              element={!user ? <Login /> : <Navigate to='/' />}
            />
            <Route 
              path="/signup"
              element={!user ? <Signup /> : <Navigate to='/' />}
            />
            <Route 
              path="/diary-details/:id"
              element={user ? <DiaryDetails /> : <Navigate to='/login' />} // Protect DiaryDetails route
            />
            <Route 
              path="/admin-dashboard"
              element={user && user.role === "admin" ? <AdminDashboard /> : <Navigate to='/login' />}
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