My-Portfolio
 Frontend Developer Portfolio – Oluwakoya David

Project Overview

This project is a personal portfolio website for Oluwakoya David, showcasing frontend and backend development skills, as well as graphic design works. The site features a modern, responsive design and includes sections for projects, about, and contact information. It demonstrates proficiency in web development, UI/UX, and interactive web features.

---

Features Implemented

Responsive Design: Works seamlessly on desktop, tablet, and mobile devices.
Hero Section: Eye-catching introduction with a call-to-action.
Projects/Works Page: Showcases web applications, design works, and interactive demos using iframes and image galleries.
About Page: Details skills, career interests, and personal experiences relevant to web development.
Contact Form: Users can send messages via a validated contact form.
Dynamic Date & Time: Footer displays the current date and time using JavaScript.
Form Validation: JavaScript ensures required fields are filled and email is valid before submission.
Accessible & Clean UI: Uses semantic HTML and accessible color contrasts.

---

Technology Used

HTML5 – Structure and content
CSS3 – Styling and responsive layouts (including Flexbox and media queries)
JavaScript (ES6+) - Interactivity, form validation, dynamic date/time
Adobe Photoshop & Illustrator – For graphics and design assets

---

Setup Instructions

1. Clone or Download the Repository
   - Download the project folder to your local machine.

2. File Structure
   ```
   /Project
     |-- ICT index.html
     |-- works.html
     |-- about.html
     |-- contact.html
     |-- ICT style.css
     |-- works style.css
     |-- about.css
     |-- contact.css
     |-- about.js
     |-- contact.js
     |-- works.js
     |-- images, design assets, etc.
   ```

3. Open in Browser
   - Open `ICT index.html` in your browser to view the homepage.

4. Edit Content
   - Update project links, images, and personal information as needed.

5. Test Responsiveness
   - Resize your browser or use device emulation tools to test mobile and tablet layouts.

---

Problems Faced & Solutions

1. Local File Paths for Images and Iframes
   - Problem: Using absolute Windows paths (e.g., `C:\Users\...`) for images and iframes will not work when deployed or on other machines.
   Solution: Use relative paths (e.g., `images/design1.png`) and keep all assets within the project directory.

 2. Form Validation Not Working
   - Problem: JavaScript validation may not trigger if the script is not properly linked or if element IDs do not match.
Solution: Ensure `<script src="contact.js"></script>` is included at the end of the HTML body and that all form fields have the correct IDs.

 3. Responsive Layout Issues
Problem: Elements may overflow or not stack correctly on small screens.
Solution: Use CSS media queries and flexible units (%, vw, rem) to adjust layouts for different screen sizes.

4. Dynamic Date/Time Not Displaying
Problem: The JavaScript for date/time may not run if the element with `id="datetime"` is missing.
Solution: Ensure the `<div id="datetime"></div>` is present in the footer and the script is loaded.

5. Fonts and External Resources Not Loading
Problem: If using Google Fonts or CDN links, a network connection is required.
Solution: Check your internet connection or download fonts/assets for offline use.

---
 Credits

 Designed and developed by Oluwakoya David.
