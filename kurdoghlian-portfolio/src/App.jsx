import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { ThemeProvider } from './context/ThemeContext';
import { GlobalStyles } from './styles/globalStyles';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Coursework from './pages/Coursework';
import Photography from './pages/photography';
import Projects from './pages/Projects';
import { useTheme } from './context/ThemeContext';

const ThemedApp = () => {
  const { theme } = useTheme();
  
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coursework" element={<Coursework />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </EmotionThemeProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

export default App;