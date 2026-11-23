import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Progress from "./pages/Progress";
import Streak from "./pages/Streak";
import Profile from "./pages/Profile";
import CheckIn from "./pages/CheckIn";
import Start from "./pages/Start";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F7F5EF] text-[#17211D]">
        <main className="mx-auto min-h-screen max-w-md px-5 pb-32 pt-8 md:max-w-2xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/streak" element={<Streak />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/check-in" element={<CheckIn />} />
            <Route path="/start" element={<Start />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;