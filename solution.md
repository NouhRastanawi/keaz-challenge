# Solution Approach

## Overview

For this challenge, I implemented an interactive dashboard displaying three key datasets using Recharts: **Contacts Over Time, Contact Sources, and Shopify Revenue**. The goal was to present data dynamically while keeping the UI clean and responsive.

## Choosing Recharts

I did a research on what availabe libraries for data visualization and ended up with three options (Chart.js, Rechart and D3). I selected Recharts for data visualization due to its performance, responsiveness, and ease of integration with React and TypeScript. It supports key features like tooltips, legends, and animations out-of-the-box just like that!

## Chart Selection Mechanism

Instead of displaying all charts simultaneously, I implemented a **chart selection bar** allowing users to toggle between different datasets. I think this enhances usability by keeping the UI uncluttered. A state variable (`selectedChart`) manages the currently displayed chart, updating dynamically on button clicks.

## Chart Choices

The right chart for the right data. I needed to make sure I don't end up using a wrong type of chart for each data.
- **Contacts Over Time**: A **line chart** was used since it effectively visualizes trends over time.
- **Contact Sources**: A **pie chart** was selected to show proportional distribution of contact sources.
- **Shopify Revenue**: A **bar chart** was the best fit for comparing revenue between two time periods.

## Styling & Responsiveness

I personally enjoy styling with **Tailwind CSS**. I went with the already-styled styling is used in the component to keep the styling consistence in the project.
