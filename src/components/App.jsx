import { lazy, Suspense, useState } from "react";
import { PropagateLoader } from "react-spinners";
import "../components/App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Header/Header.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const Psychologists = lazy(() =>
  import("../pages/Psychologists/Psychologists.jsx")
);
const Favorites = lazy(() => import("../pages/Favorites/Favorites.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  const [color, setColor] = useState("#3470FF");
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <PropagateLoader
            color={color}
            className="spiner"
            size={15}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/psychologists" element={<Psychologists />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
