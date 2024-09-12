// import { Header } from "./Components/LandingPage/Header";
// import Banner1 from "./Components/Banner1";
// import Ourcoursesmain from "./Components/Allcourses/Ourcoursesmain";
// import CourseCard from "./Components/Allcourses/CourseCard";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/LandingPage/Home';
import Layout from './Layout';
import About from './Components/About';
import Courses from './Components/Allcourses/Courses';
import CourseDetails from './Components/Allcourses/CourseDetails';
import Cart from './Components/Allcourses/Cart';
import CheckoutCart from './Components/Allcourses/CheckoutCart';
import Teacher from './Components/Trainers/Teacher';
import TeachWithUs from './Components/Trainers/TeachWithUs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Blog from './Components/Blog';




function App() {
  return (
   
    <Router>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route  index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/course-detail" element={<CourseDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckoutCart/>} />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/teach-with-us" element={<TeachWithUs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/blog" element={<Blog/>} />
        
        
        

      </Route>
    </Routes>
  </Router> 

  );
}

export default App;
