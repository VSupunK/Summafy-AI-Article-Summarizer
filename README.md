# Summafy <img src="/src/assets/SummafyLogoIco.png" alt="Homepage Screenshot" width="150" />

[![Netlify Status](https://api.netlify.com/api/v1/badges/e7920b55-e9c3-464b-ac18-44dfc968750a/deploy-status)](https://app.netlify.com/sites/summafy/deploys)

Summafy is a web application that allows users to simplify and summarize content from articles through an easy-to-use interface. With just the URL of an article, Summafy generates a concise summary that makes it easier to understand complex information quickly.

### Live Application

🔗 [Summafy Live Demo](https://Summafy.netlify.app/)

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Easy URL Input**: Simply enter the URL of an article to generate a summary.
- **Copy to Clipboard**: Quickly copy the URL or the generated summary to the clipboard.
- **Browse History**: View a history of summarized articles saved to local storage.
- **Remove Articles**: Option to delete specific articles from the saved history.
- **Error Handling**: Provides feedback in case of any issues during the summarization process.
- **Responsive Design**: Optimized for both desktop and mobile viewing.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **API for Summarization**: [Your API name or details]
- **Icon Library**: React Icons
- **Deployment**: Netlify

## Installation

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/YOUR_GITHUB_USERNAME/Summafy.git
   cd Summafy

   ```

2. **Install Dependencies**

   ```bash
   npm install

   ```

3. **Run the Application**
   ```bash
   npm run dev
   ```

The app will run on http://localhost:5173/ by default.

## Usage

1. Enter an article URL in the input field.
2. Click the Enter button to generate a summary.
3. Copy the generated summary to your clipboard using the Copy Summary button.
4. View, copy, or delete articles in the browsing history.

## Project Structure

```bash
summarfy/
├── public/ # Static assets
├── src/
│ ├── assets/ # Icons and images
│ ├── components/ # Reusable components
│ ├── services/ # API service and logic
│ ├── App.css/ # Custom styling and Tailwind classes
│ ├── App.jsx # Main App component
│ └── main.jsx # React entry point
└── README.md # Project documentation
```

## Screenshots

### Home Page

![Homepage Screenshot](/src/assets/Screenshots/Screenshot1.png)

### URL Uploading

![URL Uploading Screenshot](/src/assets/Screenshots/Screenshot2.png)

### Summarized Article

![Summarized Article Screenshot](/src/assets/Screenshots/Screenshot3.png)

## Contributing

Contributions are welcome! Here’s how you can contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes and commit them (git commit -m 'Add some feature').
4. Push to the branch (git push origin feature/your-feature-name).
5. Open a pull request.

## License

- This project is open source and available under the MIT License.
