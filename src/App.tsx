import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { CitizenDashboard } from './pages/citizen/Dashboard';
import { QueueStatus } from './pages/citizen/QueueStatus';
import { AttendantPanel } from './pages/attendant/Panel';
import { AdminDashboard } from './pages/admin/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/citizen" element={<CitizenDashboard />} />
        <Route path="/status" element={<QueueStatus />} />
        <Route path="/attendant" element={<AttendantPanel />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;