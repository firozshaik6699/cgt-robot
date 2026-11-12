import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '@/pages/HomePage';

const SyncrobizPartnership = lazy(() => import('@/pages/SyncrobizPartnership'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('@/pages/TermsOfService'));
const Blog = lazy(() => import('@/pages/Blog'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={<div className="min-h-screen bg-black" />}>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/partnership/syncrobiz" element={<SyncrobizPartnership />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
