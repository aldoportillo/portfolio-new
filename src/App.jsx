import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageContainer from './components/PageContainer'
import Home from './pages/Home'
import NewBlog from './pages/NewBlog'
import Blogs from './pages/Blogs'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Blog from './pages/Blog'

function App() {

  const [blogData, setBlogData] = useState([])

  useEffect(() => {
    axios.get(`https://dev.to/api/articles?username=aldoportillo`)
      .then(res => {
        console.log(res.data)
        setBlogData(res.data)
      })
  }, [])

  return (
      <Routes>
        <Route path="/" element={<PageContainer><Home blogData={blogData}/></PageContainer>} />
        <Route path="/blogs" element={<PageContainer><Blogs blogData={blogData} /></PageContainer>} />
        <Route path="/blog/:slug" element={<PageContainer><Blog /></PageContainer>} />
        <Route path="/blogs/new" element={<PageContainer><NewBlog /></PageContainer>} />
        <Route path="/projects" element={<PageContainer><Home /></PageContainer>} />
        <Route path="/contact" element={<PageContainer><Home /></PageContainer>} />
      </Routes>
  )
}

export default App
