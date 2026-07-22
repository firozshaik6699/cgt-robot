import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '@/pages/HomePage';
import SyncrobizPartnership from '@/pages/SyncrobizPartnership';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import Blog from '@/pages/Blog';

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/partnership/syncrobiz" element={<SyncrobizPartnership />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<HomePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
