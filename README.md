# FutureTech Blog Platform

A modern blog platform focused on AI and technology, built with React, NestJS, and MongoDB.

## 🎥 Demo

![FutureTech Demo](api/assets/demo.gif)

![FutureTech Banner](client/public/banner.png)

## 🎥 Demo

![FutureTech Demo](demo.gif)

## 🚀 Features

- **Modern Authentication System**

  - JWT-based authentication with access & refresh tokens
  - Secure password hashing with bcrypt
  - Protected routes and API endpoints

- **Rich Blog Management**

  - Create, read, update, and delete blog posts
  - Tag-based categorization
  - Comment system
  - Like and share functionality

- **User Features**

  - Custom user profiles
  - Personal blog dashboard
  - Comment management
  - Profile customization

- **Modern UI/UX**
  - Responsive design
  - Dark mode by default
  - Clean and intuitive interface
  - Loading states and error handling

## 🛠️ Tech Stack

### Frontend

- React 18
- TypeScript
- Tailwind CSS
- React Router v6
- React Query
- Formik & Yup
- Axios

### Backend

- NestJS
- MongoDB with Mongoose
- JWT Authentication
- TypeScript
- Express

## 📦 Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yasin-erkan/FutureTech-Blog-Platform-.git
   cd futuretech
   \`\`\`

2. Install dependencies:
   \`\`\`bash

# Install backend dependencies

cd api
npm install

# Install frontend dependencies

cd ../client
npm install
\`\`\`

3. Set up environment variables:

Create \`.env\` file in the \`api\` directory:
\`\`\`env
MONGODB_URI=mongodb://localhost:27017/future-tech
JWT_SECRET=your-secret-key
JWT_EXPIRATION_TIME=3600
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_REFRESH_EXPIRATION_TIME=604800
\`\`\`

4. Start the development servers:

Backend:
\`\`\`bash
cd api
npm run start:dev
\`\`\`

Frontend:
\`\`\`bash
cd client
npm run dev
\`\`\`

## 🌐 API Endpoints

### Authentication

- \`POST /auth/register\` - Register new user
- \`POST /auth/login\` - Login user
- \`POST /auth/refresh\` - Refresh access token
- \`POST /auth/logout\` - Logout user

### Posts

- \`GET /posts\` - Get all posts
- \`GET /posts/own\` - Get user's posts
- \`GET /posts/:id\` - Get single post
- \`POST /posts\` - Create new post
- \`PATCH /posts/:id\` - Update post
- \`DELETE /posts/:id\` - Delete post

### Comments

- \`GET /post/:postId/comments\` - Get post comments
- \`POST /post/:postId/comments\` - Add comment
- \`DELETE /comments/:id\` - Delete comment

### User

- \`GET /user/me\` - Get user profile
- \`PATCH /user/me\` - Update user profile

## 📱 Screenshots

### Home Page

![Home Page](api/assets/screenshots/home.png)

### Blog Detail

![Blog Detail](api/assets/screenshots/detail.png)

### User Dashboard

![Dashboard](api/assets/screenshots/dashboard.png)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- \*\*\Erkan, Yasin\*\* - _Initial work_ - [YourGithub](https://github.com/yasin-erkan)

## 🙏 Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
