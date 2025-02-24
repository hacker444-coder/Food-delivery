import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (
    <div>
     <BrowserRouter>

<Suspense fallback={<p>Loading.....</p>}>
  <Routes>
      <Route path="/" element={<HomePage />} />

 </Routes>
</Suspense>

</BrowserRouter>
    </div>
  );
}

export default App;
