import React from 'react'
import Navbar from './components/Utils/Navbar';
import Footer from './components/Utils/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/Utils/AdminLogin';
import UserLogin from './components/Utils/UserLogin';
import Signup from './components/Utils/Signup';
import AdminHome from './components/admin/AdminHome';
import UserHome from './components/user/UserHome';
import MaintenanceHome from './components/Maintenance/MaintenanceHome';
import ReportsHome from './components/Reports/ReportsHome';
import TransactionsHome from './components/Transactions/TransactionsHome';
import AvailBooksInfo from './components/Transactions/AvailBooksInfo';
// import UseSomeContext from './context/UseSomeContext';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exect path="/" element={<UserLogin />} />
          <Route exect path="/userlogin" element={<UserLogin />} />
          <Route exect path='/userhome' element={<UserHome />} />
          <Route exect path='/userlogin/userhome' element={<UserHome />} />
          <Route exect path='/adminlogin/adminhome' element={<AdminHome />} />
          <Route exect path='/adminlogin' element={<AdminLogin />} />
          <Route exect path='/signup' element={<Signup />} />
          <Route exect path='/MaintenanceHome' element={<MaintenanceHome />} />
          <Route exect path='/ReportsHome' element={<ReportsHome />} />
          <Route exect path='/TransactionHome' element={<TransactionsHome />} />
          <Route exect path='/TransactionsHome/AvailBooksInfo' element={<AvailBooksInfo />} />
        </Routes>
        <Footer/>
       
  
      </BrowserRouter>
    </>
  )
}
