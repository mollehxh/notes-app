# Notes App

This is a React.js application for managing notes.

## Demo

Check out the live demonstration of the Notes App [here](https://mollehxh.github.io/notes-app/).

## Installation

1. Clone the repository: `git clone https://github.com/mollehxh/notes-app.git`
2. Navigate to the project directory: `cd notes-app`
3. Install dependencies: `npm install`

## Usage

To start the application, run the following command:

```shell
npm start
```

Once the application is running, open your web browser and go to `http://localhost:3000` to access the Notes App.

## Features

- Display rendered Markdown text from the local browser database (indexeddb) when a note is selected.
- Clicking the "Delete" button prompts for confirmation before deleting the selected note using a standard modal window.
- The content is automatically saved while editing.
- Search functionality allows searching notes by matching characters.
- Clicking the "+" button creates a new empty note.
