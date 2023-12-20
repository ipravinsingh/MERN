import { Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Pricing from "./Pages/Pricing";
import Notfound from "./Pages/Notfound";
import Navigation from "./Components/Navigation";
import Profil from "./Pages/Profil";
import Project from "./Pages/Project";
import Freepricing from "./Pages/Pricing/Freepricing";
import Premiumpricing from "./Pages/Pricing/Premiumpricing";
import Freemium from "./Pages/Pricing/Freemium";
import ForPrimeUsers from "./Pages/ForPrimeUsers";
import ProtectedRoute from "./Pages/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="*" element={<Notfound />}></Route>
        <Route
          path="/about"
          state={{ from: "navigation", luckeyNumber: 12 }}
          element={<About />}
        />

        {/* login functaniloties from assignment */}
        <Route path="/login" element={<Login />} />
        <Route path="/user/:userId" element={<Profil />} />
        <Route path="/user/:userId/:projectId" element={<Project />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/prime" element={<ForPrimeUsers />} />
        </Route>

        <Route path="/pricing" element={<Pricing />}>
          <Route path="free" element={<Freepricing />} />
          <Route path="premium" element={<Premiumpricing />} />
          <Route path="freemium" element={<Freemium />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
