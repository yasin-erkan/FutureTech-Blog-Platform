import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Blogs from './pages/blogs';
import About from './pages/about';
import Contact from './pages/contact';
import Header from './components/header';
import Footer from './components/footer';
import Detail from './pages/detail';
import Protected from './components/protected';
import BlogForm from './pages/form';
import OwnBlogs from './pages/own-blogs';

function App() {
  return (
    <div className="bg-dark-08 text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<Detail />} />

          <Route element={<Protected />}>
            <Route path="/blog/create" element={<BlogForm />} />
            <Route path="/blog/:id/edit" element={<BlogForm />} />
            <Route path="/own-blogs" element={<OwnBlogs />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
