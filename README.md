
# Bookstore Web Application
[View 👁️‍🗨️](praveenavgithub.github.io/Biccas_proj/)

This project is a **Bookstore Web Application** built using **React.js**, **Firebase**, **Bootstrap**, **CSS**, and **HTML**. The app fetches book data from the **New York Times API**, providing users with a seamless browsing and shopping experience. 

It includes advanced **Search**, **Sort**, and **Filter** functionalities for enhanced user interactions. The app also implements **Lazy Loading**, **Dynamic Navigation**, and a **Role-Based Access Control (RBAC) UI** for secure and efficient management.

---

## Features

### Bookstore Functionality
- **Books from New York Times API:** Fetches real-time book data from the NYT API for users to explore.
- **Search:** Users can search for books by title or author.
- **Sort:** Allows sorting of books based on criteria like title, author, or publication date.
- **Filter:** Enables users to filter books by categories, genres, or other attributes.

### Performance Enhancements
- **Lazy Loading:** Enhances app performance by loading content on demand.
- **Dynamic Navigation:** Provides smooth and seamless user interaction as users navigate through the app.

### Authentication and Security
- **Firebase Integration:** Implements secure user authentication for login and signup functionality.
- **Data Privacy:** Ensures all user information is securely stored and protected.

### Role-Based Access Control (RBAC)
- **RBAC UI Implementation:** Designed and implemented a robust RBAC system to restrict access to certain parts of the app based on user roles. This ensures the app can be managed efficiently.

---

## Technology Stack
- **Frontend:** React.js, Bootstrap, CSS, HTML
- **Backend & Database:** Firebase Authentication
- **API Integration:** New York Times API

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (version 14 or later)
- **npm** or **yarn**
- Firebase account for authentication setup

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:PraveenaVgithub/Biccas_proj.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Biccas_proj
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the project root and add your Firebase and New York Times API keys:
   ```env
   REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
   REACT_APP_NYT_API_KEY=your-nyt-api-key
   ```

### Running the App
1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure
```plaintext
src/
│
├── components/        # Reusable React components
├── pages/             # Application pages
├── utils/             # Utility functions and helpers
├── services/          # API and Firebase integration
├── App.js             # Main app component
└── index.js           # Entry point
```

---

## Role in the Project
I was responsible for:
- **Developing the Bookstore Frontend:** Designed and implemented a responsive user interface using React.js and Bootstrap.
- **Integrating APIs:** Connected the app to the New York Times API for fetching book data.
- **Search, Sort, and Filter:** Developed advanced search, sort, and filter functionalities to enhance the user experience.
- **Implementing Authentication:** Configured Firebase to handle secure user login and signup.
- **Optimizing Performance:** Added Lazy Loading and Dynamic Navigation to enhance app performance.
- **RBAC Implementation:** Designed and implemented a Role-Based Access Control (RBAC) UI for efficient user role management.

---

## Future Enhancements
- Add a shopping cart feature for purchasing books.
- Enhance the filter options with multi-select functionality.
- Integrate additional APIs for expanded book data.

---

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [React.js](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [New York Times API](https://developer.nytimes.com/)
- [Bootstrap](https://getbootstrap.com/)

