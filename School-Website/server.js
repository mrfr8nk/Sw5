const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Only serve safe static directories (no root or sensitive directories)
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

// Security middleware to block access to sensitive files
app.use((req, res, next) => {
  const blockedPaths = [
    '/server.js', '/package.json', '/package-lock.json', 
    '/netlify.toml', '/vercel.json', '/replit.md', '/.env'
  ];
  
  // Block /db/ access except for specific allowed files
  if (req.path.startsWith('/db/') && req.path !== '/db/firebase.js') {
    return res.status(404).send('Not found');
  }
  
  if (blockedPaths.some(blocked => req.path.startsWith(blocked))) {
    return res.status(404).send('Not found');
  }
  next();
});

// Handle all the custom routes from your vercel.json/netlify.toml
const routes = [
  { path: '/academics', file: '/pages/academics.html' },
  { path: '/admissions', file: '/pages/admissions.html' },
  { path: '/news', file: '/pages/news.html' },
  { path: '/fees', file: '/pages/fees.html' },
  { path: '/schoolview', file: '/pages/environment.html' },
  { path: '/calendar', file: '/pages/calendar.html' },
  { path: '/about', file: '/pages/about.html' },
  { path: '/faculty', file: '/pages/faculty.html' },
  { path: '/ai', file: '/pages/ai.html' },
  { path: '/staff', file: '/pages/stuff.html' },
  { path: '/report', file: '/pages/reports.html' },
  { path: '/viewreports', file: '/pages/viewreports.html' },
  { path: '/contact', file: '/pages/contact.html' },
  { path: '/gallery', file: '/pages/gallery.html' },
  { path: '/apply', file: '/pages/student-application.html' },
  { path: '/adminapplication', file: '/pages/admin-application.html' },
  { path: '/setreportcard', file: '/pages/teacher-set-report.html' },
  { path: '/login', file: '/pages/student-login.html' },
  { path: '/signup', file: '/pages/student-signup.html' },
  { path: '/teacherslogin', file: '/admin/admin-login.html' },
  { path: '/admin', file: '/admin/admin.html' },
  { path: '/credits', file: '/admin/credits.html' },
  { path: '/teacherssignup', file: '/admin/admin-signup.html' },
  { path: '/teachersdashboard', file: '/admin/teachers-dashboard.html' },
  { path: '/dashboard', file: '/pages/student-dashboard.html' },
  { path: '/teacherusers', file: '/admin/teacher-users.html' },
  { path: '/studentusers', file: '/pages/student-users.html' },
  { path: '/myclass', file: '/admin/my-class.html' },
  { path: '/reportcard', file: '/reportcard.html' },
  { path: '/stem', file: '/pages/stem.html' },
  { path: '/arts', file: '/pages/arts.html' },
  { path: '/commercial', file: '/pages/commercial.html' },
  { path: '/allnews', file: '/pages/allnews.html' }
];

// Health check endpoint for Render
app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Explicitly serve Firebase config (needed by frontend)
app.get('/db/firebase.js', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'db', 'firebase.js'), (err) => {
    if (err) next(err);
  });
});

// Set up all the routes with error handling
routes.forEach(route => {
  app.get(route.path, (req, res, next) => {
    const filePath = path.join(__dirname, route.file);
    res.sendFile(filePath, (err) => {
      if (err) {
        next(err);
      }
    });
  });
});

// Handle the PDF download redirect
app.get('/download-application', (req, res) => {
  res.redirect(302, 'https://github.com/mrfr8nk/sw-v2/raw/main/admin/stmarys_application_form.pdf');
});

// Serve index.html for the root path
app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'), (err) => {
    if (err) next(err);
  });
});

// Error handler for file not found and other errors
app.use((err, req, res, next) => {
  if (err.code === 'ENOENT') {
    // File not found - serve 404 page
    res.status(404).sendFile(path.join(__dirname, '404.html'), (err2) => {
      if (err2) {
        res.status(404).send('Page not found');
      }
    });
  } else {
    // Other errors - don't expose stack trace in production
    console.error('Server error:', err);
    res.status(500).send('Internal server error');
  }
});

// Handle 404 - serve 404.html for any unmatched routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'), (err) => {
    if (err) {
      res.status(404).send('Page not found');
    }
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Access your app at: http://localhost:${PORT}`);
});