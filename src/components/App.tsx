import { useState, createContext } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Current from "./Current";
import About from "./About";
import Contact from "./Contact";
import Programs from "./Programs";

export const PageContext = createContext("");

// const programs = {
//   title: "This is the title",
//   description: "This is the description"
// }

function App() {
  const [currentPage, setCurrentPage] = useState("főoldal");

  return (
    <PageContext.Provider value={currentPage}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='aktualis' element={<Current />} />
          <Route path='magunkrol' element={<About />} />
          {/* <Route path='programok'>
            <Route index element={<Programs programs={programs}/>} />
            <Route path=":number" element={<Programs programs={programs}/>} />
          </Route> */}
          <Route path="programok" element={<Programs />} />
          <Route path='kapcsolat' element={<Contact />} />
        </Routes>
      </HashRouter>
    </PageContext.Provider>
  );
}

export default App;

