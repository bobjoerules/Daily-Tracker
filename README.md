# Daily Tracker

A web-based application for tracking daily activities and tallies. Data is stored locally in the browser's storage.

## Features

- **Activity Tracking**: Add, edit, and remove activities. Increment or decrement tallies for each activity on a daily basis.
- **Data Persistence**: Uses `localStorage` to persist activity names and tally data across browser sessions.
- **Statistics**: Automatically calculates current streaks and total days tracked.
- **Reporting**: Displays activity totals for the current month and the current year.
- **Data Portability**: Functions to download internal data as a text file and upload previously exported data.
- **Visual Enhancements**:
    - **Keyword Icons**: Automatically replaces specific activity names (e.g., "youtube", "discord", "spotify") with corresponding icons.
    - **Time-based Background**: The application background changes based on the current hour of the day.

## File Structure

- `index.html`: The main user interface and structure of the application.
- `style.css`: Contains CSS rules for layouts and element styling.
- `script.js`: Handles core application logic, data management, and tally calculations.
- `keyword.js`: Manages the mapping of activity names to visual icons and monitors DOM changes.
- `time.js`: Updates the application's background gradient based on the system time.
- `images/`: Directory containing asset icons for the application.