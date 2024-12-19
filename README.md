# Natours Project

## Overview

The Natours project is a Node.js-based web application for managing and exploring tourism packages and destinations. This is a redesigned version inspired by a Node.js course, with a separation of frontend and backend functionality for scalability and ease of development. The application is also a Progressive Web App (PWA), offering better mobile experience.

## Features

- Backend API built with Express.js
- Frontend deployed on Netlify
- Backend deployed on Heroku
- CI/CD pipelines for seamless deployment
- Progressive Web App (PWA) functionality for offline access and improved user experience

## Project Structure

```
.
|-- frontend/       # Contains frontend application files
|-- backend/        # Contains backend application files
|-- README.md       # Project documentation (this file)
```

## Technologies Used

### Backend:

- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM)
- dotenv (Environment Variables)
- cors (Cross-Origin Resource Sharing)

### Frontend:

- React (or framework used in the project)
- Styled-components (if applicable)
- Service Workers (for PWA functionality)

## Deployment

### Frontend:

- Hosted on Netlify
- Deployment linked to the `frontend` folder of the repository

### Backend:

- Hosted on Heroku
- Deployment linked to the `backend` folder of the repository

## CI/CD Configuration

- **Frontend**: Netlify automatically builds and deploys changes pushed to the `frontend` folder.
- **Backend**: Heroku automatically builds and deploys changes pushed to the `backend` folder.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Node.js Course Inspiration](https://www.udemy.com/)
- Thanks to the open-source community for tools and resources.

---

Feel free to contribute or report issues on the [GitHub Repository](https://github.com/<your-username>/natours).
