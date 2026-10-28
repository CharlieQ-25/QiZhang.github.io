# Personal CV Website (GitHub Pages)

A minimal, responsive, static personal website for showcasing and downloading your CV. No frameworks, build tools, subscriptions, or server required.

## Quick setup / 快速开始

### 1. Edit your personal information / 修改个人信息

Open `config.js` in a text editor or GitHub's editor. Change `name`, `role`, `intro`, `about`, and optionally `email`, `linkedin`, `github`, etc. Save the file.

### 2. Add your CV / 上传 PDF

Add your real PDF résumé at **`assets/cv.pdf`** (exact spelling). You can upload it by opening the `assets` folder in your GitHub repository and using **Add file → Upload files**. The homepage will automatically show the PDF preview and download links when the file exists.

**Privacy:** Once the website is public, your PDF is publicly accessible and may be indexed by search engines. Remove sensitive information such as your street address, government identification, and private phone numbers before publishing.

### 3. Publish through GitHub Pages / 用 GitHub Pages 发布

1. Sign in to [github.com](https://github.com/) and select **New repository**.
2. Name the new repository **`YOUR-USERNAME.github.io`**, replacing `YOUR-USERNAME` with your GitHub login (not your display name).
3. Set repository visibility to **Public** (for GitHub Free). Click **Create repository**.
4. Upload all site files **inside this ZIP folder** directly into the repository's root. Make sure `index.html` is at the top level, not inside another folder. Commit the changes.
5. Open **Settings → Pages** in your repository. Under **Build and deployment**, choose **Deploy from a branch**. Select **main**, folder **/(root)**, then **Save**.
6. Your website will be at **`https://YOUR-USERNAME.github.io/`** after deployment succeeds.

Official instructions: https://docs.github.com/en/pages/quickstart

### 4. Update the CV anytime / 更新简历

Simply upload a new version of `assets/cv.pdf` with **the same exact file name**, replacing the old file, and commit. Your live website will show the updated CV after deployment. You do not have to edit any site code.

## File structure

```
index.html        Homepage and PDF display
style.css         Responsive design
script.js         PDF detection + site behavior
config.js         Name, title, summary, contact details
favicon.svg       Browser tab icon
.nojekyll         GitHub Pages static-site marker
assets/
  cv.pdf          YOUR FILE: upload this yourself
```

## Preview locally

Run `python -m http.server 8000` inside this folder, then open `http://localhost:8000` in your browser. If the PDF has not been added, a placeholder message will show rather than a broken viewer.

## Notes

- GitHub Pages publishes static files. It **does not** support uploading PDFs directly from the public site as an authenticated dashboard. Add or replace your PDF in your GitHub repository.
- A public Pages website is visible to everyone, even if it is later deployed from a private repository under a paid plan.
- You can add a custom domain later in **Settings → Pages**.
