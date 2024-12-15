# **MSFS App**

This is a React-based web app named **"msfs-app"**, built as part of my learning journey with **ReactJS**. The application tracks and displays detailed flight information for the flights I’ve flown in **Microsoft Flight Simulator**.

## **Table of Contents**
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Deployment](#deployment)
6. [Contributing](#contributing)
7. [License](#license)

## **Project Overview**
The **MSFS App** is a personal project designed to track flight details I’ve accumulated in **Microsoft Flight Simulator**. The app stores key data points for each flight, including the flight route, date of the simulated flight, aircraft used, flight name/number, distance, duration, and cruise altitude.

This web app is still a work in progress, and as I continue to learn ReactJS, I will keep adding new features and improving the design and functionality.

## **Features**
- **Flight Tracking**: Logs details of each flight in Microsoft Flight Simulator, including flight name, route, aircraft used, distance, and duration.
- **Flight Display**: Shows a list of all recorded flights with easy-to-read details.
- **Responsive Design**: The app is mobile-friendly and can be used on a variety of devices.
- **Dynamic Content**: Flight details are dynamically rendered based on data, which can be modified or expanded.

**Note:** Some features are still under development, so expect changes and improvements over time.

## **Technologies Used**
- **ReactJS**: The core framework used to build the user interface.
- **React Router**: For managing different pages within the app (such as Home and About).
- **Bootstrap**: For styling and making the app responsive.
- **JavaScript (ES6+)**: Used to implement logic and manage data flow.
- **CSS**: For custom styling of various components.

## **Getting Started**

To get a local copy of the app up and running on your machine, follow these instructions.

### **Prerequisites**
- Node.js and npm should be installed. You can download Node.js from [here](https://nodejs.org/).
- Git should be installed on your machine. You can download Git from [here](https://git-scm.com/).

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/msfs-app.git
   ```
2. Navigate into the project folder:
   ```bash
   cd msfs-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   Your app will be running on [http://localhost:3000](http://localhost:3000).

## **Deployment**

To deploy the app to GitHub Pages, follow these steps:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy using GitHub Pages:
   ```bash
   npm run deploy
   ```

Your app will be deployed to the URL specified in the **homepage** field of the `package.json` file. Make sure the `homepage` URL is correctly set to your GitHub repository, like this:
```json
"homepage": "https://your-username.github.io/msfs-app/"
```

## **Contributing**

If you'd like to contribute to the project, feel free to fork the repository and submit pull requests. Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

Please make sure your code follows the existing style and includes relevant tests.

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
