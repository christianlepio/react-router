import {Route, Routes} from 'react-router-dom';

//components
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ZustandPage from './components/ZustandPage';
import PageNotFound from './components/PageNotFound';

const AppRoutes = () => {
    return(
        <Routes>
            <Route path='react-router/' element={<HomePage />} />
            <Route path='react-router/zustand' element={<ZustandPage />} />
            <Route path='react-router/about' element={<AboutPage />} />
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    )
}

export default AppRoutes;