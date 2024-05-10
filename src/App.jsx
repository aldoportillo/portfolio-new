import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageContainer from './components/PageContainer'
import Home from './pages/Home'
import NewBlog from './pages/NewBlog'
import Blogs from './pages/Blogs'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

function App() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    axios.get(`https://dev.to/api/articles?username=aldoportillo`)
      .then(res => {
        console.log(res.data)
        setBlogData(res.data)
      })
  }, [])

  const projectsData = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills in full stack development. Built with React and styled-components.",
      image: "https://example.com/images/portfolio-website.jpg"
    },
    {
      id: 2,
      name: "Recipe App",
      description: "A web application for users to share and discover recipes. Features user authentication and recipe management. Developed using Node.js, Express, and MongoDB.",
      image: "https://example.com/images/recipe-app.jpg"
    },
    {
      id: 3,
      name: "Weather Dashboard",
      description: "A dashboard displaying real-time weather data fetched from an API. Users can search for weather by city. Implemented with JavaScript and API integration.",
      image: "https://example.com/images/weather-dashboard.jpg"
    },
    {
      id: 4,
      name: "Fitness Tracker",
      description: "A mobile app to help users track their fitness routines and progress. Includes custom workout plans and tracking features. Built with React Native.",
      image: "https://example.com/images/fitness-tracker.jpg"
    },
    {
      id: 5,
      name: "E-commerce Store",
      description: "An online store for a local boutique. Supports product browsing, cart management, and checkout functionality. Created with Django and a PostgreSQL database.",
      image: "https://example.com/images/e-commerce-store.jpg"
    },
    {
      id: 6,
      name: "Chat Application",
      description: "A real-time chat application that supports multiple users and rooms. Features user accounts and data security. Developed using Socket.io and React.",
      image: "https://example.com/images/chat-application.jpg"
    }
  ];

  return (
      <Routes>
        <Route path="/" element={<PageContainer><Home blogData={blogData}/></PageContainer>} />
        <Route path="/blogs" element={<PageContainer><Blogs blogData={blogData} /></PageContainer>} />
        <Route path="/blog/:slug" element={<PageContainer><Blog /></PageContainer>} />
        <Route path="/blogs/new" element={<PageContainer><NewBlog /></PageContainer>} />
        <Route path="/projects" element={<PageContainer><Projects projectsData={projectsData} /></PageContainer>} />
        <Route path="/contact" element={<PageContainer><Home /></PageContainer>} />
      </Routes>
  )
}

export default App
