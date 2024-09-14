import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Clients } from "./Pages/Clients";
import { FormClient } from "./Pages/FormClient";
import { Movies } from "./Pages/Movies";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route index element={<Clients />} />
            <Route path="/new-client" element={<FormClient />} />
            <Route path="/update-client/:id" element={<FormClient />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
