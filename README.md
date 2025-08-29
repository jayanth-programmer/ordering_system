# Mini Ordering System with Cart Functionality

A complete MERN stack application for food ordering with cart functionality, built using MongoDB, Express, React, and Node.js.

## 🚀 Features

- **Menu Display**: Beautiful grid layout showing food items with images, names, and prices
- **Shopping Cart**: Add/remove items, update quantities, and view total
- **Order Processing**: Server-side validation and order placement
- **Responsive Design**: Modern UI built with Tailwind CSS
- **State Management**: React Context API for cart state
- **Real-time Updates**: Dynamic cart calculations and updates

## 🛠️ Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- CORS middleware
- Error handling

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Axios for API calls
- Context API for state management

## 📁 Project Structure

```
├── server/                 # Backend
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   ├── server.js          # Main server file
│   ├── seed.js            # Database seeding
│   └── package.json       # Backend dependencies
├── client/                # Frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── tailwind.config.js # Tailwind configuration
│   └── package.json       # Frontend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the server directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/ordering-system
   PORT=5000
   ```

4. **Start MongoDB:**
   Make sure MongoDB is running on your system or update the MONGODB_URI in .env

5. **Seed the database:**
   ```bash
   npm run seed
   ```

6. **Start the server:**
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## 📱 API Endpoints

### Menu
- `GET /api/menu` - Get all menu items

### Cart/Orders
- `POST /api/cart` - Place order (accepts cart items)

### Admin
- `GET /api/orders` - Get all orders

## 🎨 UI Features

- **Gradient Backgrounds**: Beautiful blue to purple gradients
- **Card Design**: Modern cards with hover effects and shadows
- **Responsive Grid**: Mobile-friendly layout that adapts to screen size
- **Interactive Elements**: Hover effects, transitions, and animations
- **Clean Typography**: Consistent font hierarchy and spacing

## 🔧 Customization

### Adding New Menu Items
1. Add items to `server/seed.js`
2. Run `npm run seed` to update the database

### Styling Changes
- Modify `client/src/index.css` for custom CSS
- Update `client/tailwind.config.js` for theme changes

### API Modifications
- Edit route files in `server/routes/`
- Update models in `server/models/`

## 🚀 Deployment

### Backend
- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables for production
- Use MongoDB Atlas for cloud database

### Frontend
- Build the project: `npm run build`
- Deploy to Vercel, Netlify, or any static hosting service
- Update API base URL in `client/src/services/api.js`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify MongoDB connection
3. Ensure all dependencies are installed
4. Check API endpoints are accessible

---

**Happy Coding! 🎉**
