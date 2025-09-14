React Experiment – Book Management UI
Aim / Goals

To design and implement a simple Book Management UI using React.

To practice creating React components with proper styling in a separate CSS file.

To ensure the UI is user-friendly, centered, and visually consistent with the expected output.

Objective

Build a React app that displays a small book management interface.

Allow the user to:

Add a new book

Remove an existing book

Apply custom CSS styling to match the provided reference design.

Focus on layout alignment, contrast, and readability.

Task Description

Create two files:

App.jsx → contains the React component logic and UI structure.

App.css → contains all the styling for layout, colors, spacing, and alignment.

The app must:

Display a title header.

Provide input fields and buttons (Add Book, Remove Book).

Show a list of books dynamically based on user actions.

The design should exactly resemble the given reference image in terms of layout and styling.

Procedure / Steps

Set up a React project using vite or create-react-app.

Example:
npx create-react-app book-management
cd book-management
or
npm create vite@latest book-management
cd book-management

Navigate to the src folder and create two files:

App.jsx

App.css

Write the JSX structure inside App.jsx:

A container div for the layout.

A heading for the title.

Input box with Add and Remove buttons.

A list section to display books.

Add styling rules in App.css:

Center the layout on the screen.

Apply neat margins, padding, and spacing.

Ensure text contrast is clear and accessible.

Import CSS into App.jsx using:
import './App.css';

Run the project using:
npm run dev
or
npm start

Test the features:

Add a book and see it in the list.

Remove a book and confirm it disappears.

Result

Successfully implemented a React Book Management UI.

The application allows adding and removing books dynamically.

The UI matches the given design reference with centered layout and proper contrast.

Learning Outcome

Gained hands-on experience in React component creation.

Learned how to separate structure and style (JSX vs CSS).

Understood how to align layouts properly using modern CSS techniques.

Improved skills in user interface design with focus on readability and accessibility.

Practiced the React workflow: project setup → component building → styling → testing.