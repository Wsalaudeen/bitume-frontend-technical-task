# News Today - React News Feed Application

A modern, responsive news feed application built with React, Tailwind CSS, and the News API. Features real-time news updates, search functionality, and category filtering.

## Features

- 📰 Latest news headlines from multiple sources
- 🔍 Real-time search functionality
- 📱 Fully responsive design
- 🎯 Category-based filtering
- ⚡ Fast loading with skeleton screens
- 🎨 Modern UI with Tailwind CSS
- 🌙 Dark mode support
- ❤️ Interactive engagement features

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS v3** - Styling and responsive design
- **Axios** - HTTP client for API requests
- **Vite** - Build tool and development server
- **Lucide React** - Modern icon library
- **News API** - News data source

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- News API key from [newsapi.org](https://newsapi.org)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd news-today
```

2. Install dependencies:
```bash
npm install
```

3. Update the API key in `src/services/newsApi.js`:
```javascript
const API_KEY = 'your-news-api-key-here';
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) to view the application.

## API Endpoints Used

The application uses the News API with the following endpoints:

- **Top Headlines**: `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY&category=sports`
- **Search Everything**: `https://newsapi.org/v2/everything?q=crypto and ethereum&apiKey=YOUR_API_KEY&searchIn=title,content`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── SearchBar.jsx       # Search functionality
│   ├── CategoryFilter.jsx  # Category filtering
│   ├── NewsCard.jsx        # Individual news article card
│   ├── LoadingSpinner.jsx  # Loading states
│   └── ErrorState.jsx      # Error handling
├── services/
│   └── newsApi.js          # API integration
├── App.jsx                 # Main application component
├── main.jsx               # Application entry point
└── index.css              # Global styles
```

## Features in Detail

### Search Functionality
- Real-time search across news articles
- Search in titles and content
- Clear search results
- Search query persistence

### Category Filtering
- Multiple news categories (Business, Tech, Sports, etc.)
- Visual category indicators
- Smooth category switching

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Flexible grid layouts
- Touch-friendly interactions

### Loading States
- Skeleton loading cards
- Smooth transitions
- Error state handling
- Retry functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [News API](https://newsapi.org) for providing news data
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Lucide](https://lucide.dev) for the beautiful icons




