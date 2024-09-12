import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Clients } from "./Pages/Clients";
import { Movies } from "./Pages/Movies";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Clients />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
