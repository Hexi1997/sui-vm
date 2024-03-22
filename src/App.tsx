import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages";
import { AppLayout } from "@/components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
