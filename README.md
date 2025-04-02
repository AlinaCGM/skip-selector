# Skip Selector – UI/UX Redesign Assignment

This project is a redesigned version of the "Skip Selection" page from [WeWantWaste.co.uk](https://wewantwaste.co.uk). It was built using **React** and **Vite**, styled with **Material UI (MUI)**, and fetches real data from the provided API.

---

## Tech Stack

- **React** (functional components, hooks)
- **Vite** (for fast development and HMR)
- **Material UI (MUI)** for responsive components and styling
- **API**:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

---

## Assignment Goals

- Redesign the **Skip Selector page UI/UX** while maintaining its functionality.
- Ensure it works well on **mobile** and **desktop**.
- Use real-time data from the provided API.
- Write **clean, responsive, maintainable code** in React.

---

## Improvements Made

### Visual & UX Enhancements

| Area                  | Original                       | Redesigned Version (This Project)               |
| --------------------- | ------------------------------ | ----------------------------------------------- |
| **Price Visibility**  | Small blue text, poor contrast | Large white digits, blue pound icon, glowing    |
| **Card Interactions** | Static                         | Zoom on hover, soft glow, darker focus on click |
| **Selection UX**      | Entire card clickable          | Only button triggers selection (intentional UX) |
| **Dark Theme**        | Basic                          | Polished, cohesive dark UI with MUI styling     |
| **Button Styling**    | Standard                       | Improved hover/selected contrast                |
| **Typography**        | Inconsistent                   | Clean, modern text hierarchy with spacing       |
| **Chips & Tags**      | Present                        | Better color contrast and position              |
| **Responsiveness**    | Functional                     | Refined layout across breakpoints               |

---

## UX Logic Highlights

- **Focused vs Selected**:
  - Clicking a card highlights it for preview (focus only).
  - Only clicking the **“Select This Skip →”** button actually selects it.
- **Visual Feedback**:
  - **Zoom on hover**, **glow on focus**, **border on selection** for clear visual states.
- **Tooltip**:
  - Displays price breakdown (`base + VAT`) on hover for extra clarity without clutter.

---

## Getting Started

1. Clone the repo  
   `git clone https://github.com/yourusername/skip-selector.git`

2. Install dependencies  
   `npm install`

3. Run the app  
   `npm run dev`

4. Open your browser  
   `http://localhost:5173`

---

## Live Preview

sandbox link , i didn't create yet

---

## Author

This project was created by **Alina Samoteev** as part of a technical assignment.  
Built with a focus on design clarity, accessibility, and clean React code.

---

## License

MIT
