import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Typography from './pages/Typography'
import Colors from './pages/Colors'
import Spacing from './pages/Spacing'
import Flexbox from './pages/Flexbox'
import Grid from './pages/Grid'
import Responsive from './pages/Responsive'
import States from './pages/States'
import Animations from './pages/Animations'
import DarkMode from './pages/DarkMode'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/spacing" element={<Spacing />} />
          <Route path="/flexbox" element={<Flexbox />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/responsive" element={<Responsive />} />
          <Route path="/states" element={<States />} />
          <Route path="/animations" element={<Animations />} />
          <Route path="/dark-mode" element={<DarkMode />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
