# Geo Contact

Geo Contact is an offline-first, responsive dashboard application built with ReactJS. It features a sidebar with two main menu options: Dashboard and Add Contact. This app is designed to manage and display contact information with both table and map views.

## Deployment
The project is hosted on Vercel and can be accessed [here](https://geo-contact.vercel.app/add-contact).

## Features

- **Responsive Layout**: Adaptable design for various screen sizes.
- **Offline-First**: Builts to work effectively even without an internet connection.
- **Dashboard**:
  - **Table View**: Displays contact information in a table format.
  - **Map View**: Shows contacts on a map based on their longitude and latitude.
- **Add Contact Page**:
  - Form to add new contacts with fields for Name, Phone Number, Email, Addresses, Longitude, and Latitude.
  

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Sorphy/geo-contact.git
   ```
2. **Navigate to the project directory:**

   ```bash
   cd geo-contact
   ```
2. **Install dependencies:**

   ```bash
   yarn install
   ```

## How to Test Offline-First Functionality

  **run build then preview:**
  
   ```bash
   yarn build
   ```
   **then**

   ```bash
   yarn preview
   ```
  Then use the url generated on preview to test by:
    1. open dev tools in chrome
    2. go to network tab and click on the no throtting to change to offline
    3. or go to application, and under service worker, tick offline
    4. then reload page to test if it works while network is off. 
    
## Screenshots
  **Dashboard**
![Screenshot 2024-08-18 at 22 32 21](https://github.com/user-attachments/assets/241b39be-3221-46b9-aa47-38fcbce51c75)

  **Add contact page**
![Screenshot 2024-08-18 at 22 32 53](https://github.com/user-attachments/assets/06d9dc58-058f-4356-90f0-f84359f5c660)

