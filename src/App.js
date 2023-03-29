import Header from "./Components/Header";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import { useContext, useEffect } from "react";
import { AppContext } from "./Context/AppContext";
import "./App.css";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);
  useEffect(() => {
    fetchBlogPosts();
  }, []);
  return (
    <div className='flex flex-col w-screen h-screen gap-10 '>
      <Header />
      <Blog />
      <Footer />
    </div>
  );
}
