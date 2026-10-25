# Shiv Priya — AI Engineer Portfolio

A responsive static portfolio built with HTML, CSS, and JavaScript. No build step or paid service required.

## 1. Open it locally

1. Extract this ZIP.
2. Open the `shiv_priya_portfolio` folder in VS Code.
3. Install the **Live Server** extension if you do not already have it.
4. Right-click `index.html` and choose **Open with Live Server**.

Because the site loads `projects.json`, use Live Server instead of opening `index.html` directly as a file.

## 2. Personalize before publishing

### Update your contact email
Open `script.js` and replace `your.email@example.com` with your professional email.

### Check your profile links
In `script.js`, verify `GITHUB_PROFILE` and `LINKEDIN_PROFILE`.

### Add or update projects
Open `projects.json`. Each project has:
- `title`: project name
- `icon`: short symbol shown on the card
- `number`: label shown on the card
- `description`: what it does
- `technologies`: array of tools
- `github`: repository URL (use an empty string if not public yet)
- `demo`: live deployed app URL (use an empty string if not deployed)

Copy one project object, add a comma between objects, and update the fields. Save the file; refresh the page.

## 3. Publish free with GitHub Pages

1. Sign in to GitHub and create a **public** repository named `shiv-priya-portfolio` (or another name you prefer).
2. Upload the contents of this folder to the repository root. Make sure `index.html`, `styles.css`, `script.js`, `projects.json`, and `README.md` are at the root—not inside an extra nested folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages deployment to finish. Your URL will normally be `https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/`.
7. Open the URL and test all links on desktop and mobile.

## 4. Update after a new project

1. Add the repository to GitHub.
2. Add one project object to `projects.json`.
3. Commit and push the change (or upload the changed file in GitHub's website).
4. GitHub Pages republishes the site after the change is deployed.

Important: only add a live demo URL when you have deployed and tested the project publicly. Do not publish API keys, passwords, `.env` files, private datasets, or personal information.
