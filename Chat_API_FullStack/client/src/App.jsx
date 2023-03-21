import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <div className="app">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/chat" element={<Chat />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App
