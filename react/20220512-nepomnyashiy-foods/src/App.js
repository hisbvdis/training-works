import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayouts/MainLayout";
import { Movies, Movie, NotFound } from "./pages/"
import "./assets/styles/style.css";

const App = () => {
  return (<>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Movies/>}/>
          <Route path=":movieId" element={<Movie/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  </>)
}

export default App;