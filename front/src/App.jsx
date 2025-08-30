import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import BlogPage from './pages/BlogPage';
import Category from './pages/category';
import About from './pages/about';
import Contact from './pages/contacts';
import CreateBlogPost from './pages/createPost';
import Profile from './pages/profile';
import Search from './pages/searchResult'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/home"
                    element={
                        <Layout>
                            <Home />
                        </Layout>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Login />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        <Signup />
                    }
                />
                <Route
                    path="/blogpage/:id"
                    element={
                        <Layout>
                            <BlogPage />
                        </Layout>
                    }
                />
                <Route
                    path="/category"
                    element={
                        <Layout>
                            <Category />
                        </Layout>
                    }
                />
                <Route
                    path="/contact"
                    element={
                        <Layout>
                            <Contact />
                        </Layout>
                    }
                />
                <Route
                    path="/about"
                    element={
                        <Layout>
                            <About/>
                        </Layout>
                    }
                />
                <Route
                    path="/createpost"
                    element={
                        <Layout>
                            <CreateBlogPost/>
                        </Layout>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <Layout>
                            <Profile/>
                        </Layout>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <Layout>
                            <Search/>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
