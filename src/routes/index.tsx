import Details from '@/pages/Details';
import NotFound from '@/pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { useContext } from 'react';
import { CustomerContext } from '@/context/CustomerProviders';

export const RoutesMain = () => {
  const { location } = useContext(CustomerContext);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {location ? (
        <Route path='/details' element={<Details />} />
      )
        : (
          <Route path='/details' element={<NotFound />} />
          )}
    </Routes>
  );
};
