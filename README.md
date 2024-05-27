# Airbnb Clone

A full-stack application replicating the popular vacation rental platform, Airbnb, built with Next.js and other modern technologies.

## Important links
- **[Application link](https://airbnb-krish-anands-projects.vercel.app/)**


## 🛠 Technologies & Libraries
- **Next.js** for the frontend and backend.
- **Cloudinary** for image storage and management.
- **Tailwind CSS** for styling.
- **Prisma** as the ORM.
- **MongoDB** as the database.
- **NextAuth** for authentication.


## 💻 Local Setup
### Prerequisites
- Ensure you have Node.js and npm installed.
- Set up a MongoDB instance. You can use MongoDB Atlas for a free cloud database.

### Setup Instructions
1. Clone the repository
    ```sh
    git clone https://github.com/your-username/airbnb-clone.git
    cd airbnb-clone
    ```

2. Create a file `.env` in root directory.
3. Set up the following environment variables in `.env` file:
    - `DATABASE_URL` with your MongoDB connection string.
    - `NEXTAUTH_SECRET` with a random string for securing NextAuth.
    - `NEXTAUTH_URL` with your Next.js URL.
    - `CLOUDINARY_URL` with your Cloudinary URL.
    - `GITHUB_ID` with your GITHUB_ID.
    - `GITHUB_SECRET` with your GITHUB_SECRET.
    - `GOOGLE_CLIENT_ID` with your GOOGLE_CLIENT_ID.
    - `GOOGLE_CLIENT_SECRET` with your GOOGLE_CLIENT_SECRET.



4. Install dependencies using
    ```sh
    npm install
    ```

5. Set up the database schema using Prisma
    ```sh
    npx prisma migrate dev --name init
    ```

6. Run the application locally using
    ```sh
    npm run dev
    ```

## Features
- **User Authentication**: Sign in and log out with ease using Github, Google, and there own credentials.
- **Property Listings**: Users can list their properties for rental.
- **Booking**: Book available properties for your stay.
- **Favorites**: Add properties to your list of favorites.
- **Booked Trips**: View a list of all your booked trips.
- **Filters**: Filter properties by countries and number of guests.

## Contributing
We welcome contributions from the community! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch
    ```sh
    git checkout -b feature/[feature-title]
    ```
3. Make your changes and commit them
    ```sh
    git commit -am 'Add brief meaningful commit message'
    ```
4. Push to the branch
    ```sh
    git push origin feature/[feature-title]
    ```
5. Create a new Pull Request.
