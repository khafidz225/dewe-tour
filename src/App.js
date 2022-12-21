import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DetailTour from "./pages/DetailTour";
import Payment from "./pages/Payment";
import PaymentPending from "./pages/PaymentPending";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import PrivateRootUser from "./components/PrivateRootUser";
import PrivateRootAdmin from "./components/PrivateRootAdmin";
import { useState } from "react";
import ListTransaksi from "./pages/ListTransaksi";
import AddTrip from "./pages/AddTrip";

function App() {
  // Mengambil data Login dari Local Storage
  const dataLog = JSON.parse(localStorage.getItem("Login"));
  console.log(dataLog);

  const [Number, SetNumber] = useState(0);

  const [DataPay, SetDataPay] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/detail/:id"
            element={<DetailTour Number={Number} SetNumber={SetNumber} />}
          />
          <Route
            path="/"
            element={<Home Number={Number} DataPay={DataPay} />}
          />

          {/* Private Rooting untuk User */}
          <Route element={<PrivateRootUser dataLog={dataLog} />}>
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/payment/:id"
              element={
                <Payment
                  Number={Number}
                  DataPay={DataPay}
                  SetDataPay={SetDataPay}
                />
              }
            />
            <Route
              path="/paymentpending"
              element={<PaymentPending DataPay={DataPay} />}
            />
          </Route>

          {/* Private Rooting untuk Admin */}
          <Route element={<PrivateRootAdmin dataLog={dataLog} />}>
            <Route path="/transaksilist" element={<ListTransaksi />} />
            <Route path="/incometrip" element={<IncomeTrip />} />
            <Route path="/addtrip" element={<AddTrip />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
