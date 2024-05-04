import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageContainer from './components/PageContainer'
import Home from './pages/Home'

function App() {

  return (
      <Routes>
        <Route path="/" element={<PageContainer><Home /></PageContainer>} />
        <Route path="/blog" element={<PageContainer><Home /></PageContainer>} />
        <Route path="/contact" element={<PageContainer><Home /></PageContainer>} />
      </Routes>
  )
}

export default App
