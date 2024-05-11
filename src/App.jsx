import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import RegistrationPage from "./components/Register";
import LoggedInLandingPage from "./components/LoggedInLandingPage";
import NASADataFetcher from "./components/NASADataFetcher";
import OtherPage from "./components/OtherPage";
import DateInputForm from "./components/selectdate"; 
import { FaRocket} from "react-icons/fa6";


function App() {
  const [data, setData] = useState(null);
  const [otherdata, setOtherData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); // State to manage selected date


  useEffect(() => {
    // Check if there's a stored session with a valid token
    const storedSession = JSON.parse(localStorage.getItem("session"));
    if (storedSession && storedSession.isLoggedIn && new Date() < new Date(storedSession.expiresAt)) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);
  

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };


  const handleLogin = (token) => {
    setIsLoggedIn(true);
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);
    localStorage.setItem("session", JSON.stringify({ isLoggedIn: true, expiresAt, token }));
  };

  const handleLogout = (navigate) => {
    setIsLoggedIn(false);
    localStorage.removeItem("session");
    navigate("/"); 
  };

  const handleSubmitDate = (date) => {
    setSelectedDate(date);
  };


  const handleRegisterPage = () => {
    return <Navigate to="/register" />;
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/landing" /> : <Login onLogin={handleLogin} onRegisterPage={handleRegisterPage} />}
        />
        <Route path="/register" element={<RegistrationPage />} />
        <Route
          path="/landing"
          element={
            isLoggedIn ? (
              <LoggedInLandingPage handleLogout={handleLogout} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/main"
          element={
            (
              <>
                {data ? (
                  <Main data={data} handleLogout={handleLogout} />
                ) : (
                  <div className="loadingState">
                    <i className="fa-solid fa-gear"></i>
                  </div>
                )}
                {/* {showModal && (
                  // <SideBar data={data} handleToggleModal={handleToggleModal} />
                )}
                {data && <Footer data={data} handleToggleModal={handleToggleModal} />} */}
              </>
            )
          }
        />
        {/* Render DateInputForm if selectedDate is null */}
        {!selectedDate && (
          <Route
          path="/selectDate"
          element={<DateInputForm onSubmit={handleSubmitDate} />}
          />
        )}
        {/* Render OtherPage with otherdata if selectedDate is not null */}
        {selectedDate && (
          <Route
          path="/marsPhotoes"
          element={
              <>
                {Array.isArray(otherdata) ? (
                  <OtherPage data={otherdata} handleLogout={handleLogout} />
                ) : (
                  <div className="loadingState flex justify-center items-center h-screen bg-gradient-to-r from-orange-950 to-slate-900">
  <div className="flex flex-col items-center text-white">
    <FaRocket size={96} className="text-white text-center" />
    <h1 className="text-4xl font-mono mt-4">Loading...</h1>
  </div>
</div>
                )}
              </>
            }
          />
        )}
      </Routes>
      {/* Pass selectedDate to NASADataFetcher to fetch data based on selected date */}
      <NASADataFetcher selectedDate={selectedDate} setData={setData} setOtherData={setOtherData} />
    </Router>
  );
}

export default App;


