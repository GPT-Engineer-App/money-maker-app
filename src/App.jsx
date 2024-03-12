import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navigation from "./components/Navigation.jsx";
import Index from "./pages/Index.jsx";
import PageOne from "./pages/PageOne.jsx";
import PageTwo from "./pages/PageTwo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Navigation />
              <Index />
            </>
          }
        />
        <Route
          path="/page-one"
          element={
            <>
              <Navigation />
              <PageOne />
            </>
          }
        />
        <Route
          path="/page-two"
          element={
            <>
              <Navigation />
              <PageTwo />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
