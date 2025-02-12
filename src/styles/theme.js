export const themes = {
    light: {
      colors: {
        primary: '#4A5D45',    // Sage green
        secondary: '#8B7355',  // Warm brown
        accent: '#D4B59D',     // Soft terracotta
        background: '#F5F2EB', // Cream
        text: '#2C3639',       // Deep charcoal
        lightText: '#6B7C93',  // Muted blue-grey
        cardBackground: '#FFFFFF' // White for cards
      }
    },
    dark: {
      colors: {
        primary: '#E6C767',    // Rivian gold
        secondary: '#F87A53',  // Rivian orange
        accent: '#898121',     // Rivian medium olive
        background: '#4C4B16', // Rivian dark olive
        text: '#E6C767',       // Rivian gold for text
        lightText: '#898121',  // Medium olive for secondary text
        cardBackground: '#363612' // Darker version of background for cards
      }
    },
    // Shared properties between themes
    fonts: {
      primary: "'Crimson Text', serif",
      secondary: "'Source Sans Pro', sans-serif"
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px',
      xlarge: '32px'
    }
  };