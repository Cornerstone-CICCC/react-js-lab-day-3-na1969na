import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { BlogProvider } from "./context/BlogContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";
import Home from "./pages/Home";

function App() {
  return (
    <BlogProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header firstname="Nana" />
          <main className="flex-grow container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/blog/new" element={<AddPost />} />
              <Route path="/blog/edit/:id" element={<EditPost />} />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </BlogProvider>
  );
}

export default App;
