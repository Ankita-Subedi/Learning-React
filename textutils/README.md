# TextUtils

TextUtils is a React-based utility application designed to help users manipulate text. It includes features such as text conversion to uppercase and lowercase, a summary of the text, and dark/light mode toggle.

## Features

- **Text Manipulation:** Convert text between uppercase and lowercase.
- **Text Summary:** Display the number of words, characters, and estimated reading time.
- **Dark/Light Mode:** Toggle between dark and light themes.
- **Responsive Design:** Compatible with various screen sizes.

## Components

### App

The main component that sets up routing and manages the application's global state, including theme mode and alerts.

### About

A component that provides information about the application, using an accordion interface to detail text analysis, free usage, and browser compatibility.

### Alert

Displays alert messages to the user, such as confirmations of text manipulations.

### Navbar

A navigation bar that includes links to the Home and About pages, and a switch to toggle between dark and light modes.

### TextBox

A text input area where users can enter text to be converted between uppercase and lowercase. It also shows a summary of the text including word count and estimated reading time.

## Technologies Used

- **React** for building the user interface
- **Bootstrap** for styling
- **React Router** for navigation