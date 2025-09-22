# React Portfolio - B. Suresh Kanna

This is a ready-to-run React portfolio built with Bootstrap and AOS animations. It also includes a contact form using EmailJS (optional).

## Quick start
1. Extract the ZIP to a folder, e.g. `C:\Users\sathy\Desktop\my-portfolio`.
2. Open **Command Prompt** (not PowerShell) and run:

```
cd "C:\Users\sathy\Desktop\my-portfolio"
npm install
npm start
```

3. The site will open at `http://localhost:3000`.

## EmailJS (optional)
To enable the contact form, follow these steps:
1. Create an account at https://www.emailjs.com/ and add an email service.
2. Create a template (include variables: from_name, reply_to, message).
3. In `src/components/Contact.js` replace `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_USER_ID` with the values from EmailJS.

## Notes
- This project uses the following packages: `react`, `react-dom`, `react-scripts`, `bootstrap`, `aos`, `emailjs-com`.
- If you have issues with PowerShell script policies, use Command Prompt (cmd) instead.

Good luck! If you want, I can also deploy this to GitHub Pages or Netlify for you.
