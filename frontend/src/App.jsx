import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Feature2 from './components/Feature2';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Signup from './pages/Signup';
import Login from './pages/Login';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <>
            <Hero />
            <Features />
            <Feature2 />
            <Features />
            <Feature2 />
            <Testimonials />
            <Footer />
          </>
        ),
      },
      {
        path: 'signup',
        element: <Signup />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);



function App() {
  return (
    <div>
    <RouterProvider router={router}> </RouterProvider>
  </div>
  );
}

export default App;
