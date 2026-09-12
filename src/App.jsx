import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Home from '@/pages/Home';
import Research from '@/pages/Research';
import Blog from '@/pages/Blog';
import Creative from '@/pages/Creative';
import Contact from '@/pages/Contact';
import SiteLayout from '@/components/SiteLayout';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
