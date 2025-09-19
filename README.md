# AlgoAce - LeetCode Solutions Platform

A comprehensive collection of C++ solutions for LeetCode problems with a modern, responsive web interface. Clean, efficient code with detailed complexity analysis and multiple approaches.

## ✨ Features

- **Modern Homepage** with Tailwind CSS styling
- **Solution Pages** with copy-to-clipboard functionality
- **Responsive Design** that works on all devices
- **Professional Styling** with dark code blocks and clean typography
- **Easy Navigation** between problems and home page
- **Developer Profile** with social links


## 🛠️ Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: EJS templating + Tailwind CSS
- **Styling**: Custom CSS + Tailwind CSS
- **JavaScript**: Vanilla JS for copy functionality
- **Build Tools**: PostCSS + Autoprefixer


## 📋 Requirements

- Node.js 18+ recommended
- npm or yarn package manager

## 🚀 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd algoace
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add your profile image** (optional)
   ```bash
   # Add your profile image to public/Developer.jpeg
   # This will be displayed on the homepage
   ```

4. **Build CSS (Development)**
   ```bash
   npm run build:css
   ```

5. **Start the server**
   ```bash
   npm start
   ```

> **Note**: The homepage references a `Developer.jpeg` file in the `public/` directory. If you don't have this file, the image will show as broken. Add your profile image with this filename to display it on the homepage.

## 🌐 Available Pages

- **Homepage**: `http://localhost:3000` - Modern landing page with project overview
- **LeetCode 1**: `http://localhost:3000/1` - Two Sum solution
- **LeetCode 2**: `http://localhost:3000/2` - Add Two Numbers solution
- **Problem Pages**: `http://localhost:3000/{number}` - Dynamic problem pages

## 🎨 Styling & Build

### Development Mode
```bash
npm run build:css
```
Watches for changes and rebuilds CSS automatically.

### Production Build
```bash
npm run build:css:prod
```
Creates minified CSS for production deployment.

## 📁 Project Structure

```
algoace/
├── server.js                    # Express server and routes
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── render.yaml                 # Render deployment configuration
├── DEPLOYMENT.md               # Complete deployment guide
├── .gitignore                  # Git ignore rules
│
├── views/
│   ├── home.ejs               # Modern homepage with Tailwind
│   ├── 1.ejs                  # LeetCode 1 solution page
│   ├── 2.ejs                  # LeetCode 2 solution page
│   ├── 404.ejs                # 404 error page
│   └── solution-template.ejs  # Template for new solutions
│
├── public/
│   ├── styles.css             # Custom CSS for solution pages
│   ├── styles.min.css         # Compiled Tailwind CSS (generated)
│   ├── tailwind.css           # Tailwind source file
│   ├── solution.js            # Shared JavaScript for copy functionality
│   └── Developer.jpeg         # Developer profile image (add this file)
│
└── node_modules/              # Dependencies (not in git)
```

> **Note**: The `Developer.jpeg` file is referenced in the homepage but not included in the repository. Add your profile image to the `public/` directory with this filename.

## 📝 Adding New Solution Pages

### Method 1: Manual Creation
1. Create a new file in `views/` (e.g., `views/3.ejs`)
2. Use the solution template structure:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <title>LeetCode 3 - Problem Name</title>
       <link rel="stylesheet" href="/styles.min.css" />
       <link rel="stylesheet" href="/styles.css" />
       <script src="/solution.js"></script>
   </head>
   <body>
       <main>
           <h1>LeetCode 3: Problem Name (C++)</h1>
           <div class="problem-description">
               <p><strong>Problem:</strong> Problem description...</p>
               <p><strong>Example:</strong> Example with code...</p>
           </div>
           <div class="code-container">
               <button class="copy-button" onclick="copyCode(this)">Copy Code</button>
               <pre><code class="language-cpp">Your C++ solution here</code></pre>
           </div>
           <a href="/" class="back-link">← Back to Home</a>
       </main>
   </body>
   </html>
   ```

3. Add a route in `server.js`:
   ```javascript
   app.get('/3', (req, res) => {
     res.render('3', { title: 'LeetCode 3 - Problem Name' });
   });
   ```

### Method 2: Dynamic Problem Pages
The project supports dynamic problem pages using the URL pattern `/problem/{number}`.

## 🎯 Features in Detail

### Copy to Clipboard
- One-click code copying from solution pages
- Visual feedback with button state changes
- Cross-browser compatibility with fallback support
- Automatic reset after 2 seconds

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Clean typography and spacing
- Professional color scheme
- Smooth hover effects and transitions

### Code Styling
- Dark theme code blocks for better readability
- Syntax highlighting support with highlight.js
- Proper font families for code
- Inline code styling for problem descriptions
  
### HTML Entity Encoding for C++ Template Syntax
When displaying C++ code with template syntax in HTML, use HTML entities to prevent browser interpretation:
- `<` → `&lt;` (less than)
- `>` → `&gt;` (greater than)  
- `&` → `&amp;` (ampersand)

**Example**: `vector<vector<char>>&` should be written as `vector&lt;vector&lt;char&gt;&gt;&amp;` in HTML source to display correctly.

### Problem Navigation
- Easy URL-based navigation: `/problem/{number}`
- Clear instructions on how to find solutions
- Multiple approaches per problem
- Detailed complexity analysis

## 🔧 Customization

### Styling
- Modify `public/styles.css` for solution page styles
- Update `public/tailwind.css` for Tailwind customizations
- Edit `tailwind.config.js` for theme configuration

### JavaScript
- Update `public/solution.js` for shared functionality
- All solution pages automatically use the shared script

## 🚀 Deployment

### Local Development
```bash
npm start
```

### Production Build
```bash
npm run build:css:prod
npm start
```

### Environment Variables
- `PORT`: Set custom port (default: 3000)
- PowerShell: `($env:PORT = 4000); npm start`
- Bash: `PORT=4000 npm start`

### Deploy to Render (Recommended)

1. **Follow the complete deployment guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
2. **Quick deployment**:
   - Push your code to GitHub
   - Connect to Render using the `render.yaml` blueprint
   - Your app will be live at `https://your-app-name.onrender.com`

### Other Deployment Options

- **Vercel**: Use the `vercel.json` configuration
- **Netlify**: Use the `netlify.toml` configuration
- **Railway**: Direct deployment from GitHub
- **Heroku**: Use `Procfile` (if you have one)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Poonam Singh** - Full Stack Developer & Competitive Programmer

- [LinkedIn](https://www.linkedin.com/in/poonam-singh023/)
- [LeetCode](https://leetcode.com/u/2312542_cscysIIB/)
- [GitHub](https://github.com/Poonam-Singh123/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Add your solution page
4. Submit a pull request

---

**AlgoAce** - Making LeetCode solutions accessible and beautiful! 🚀

### Author
- Poonam Singh
