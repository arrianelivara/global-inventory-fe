import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { Navigation } from "./components";
import LayoutA from "./components/layout/layout-a";
import { SignIn } from "./modules";
import AuthorizedPage from "./pages/authorized/authorized.page";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/auth" element={<SignIn />} />
          <Route path="/*" element={!localStorage.getItem("accessToken") ? (
            <LayoutA component={<AuthorizedPage />}></LayoutA>
            ) : (
              <Navigate
                to={{
                  pathname: "/auth"
                }}
              />
            )} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
