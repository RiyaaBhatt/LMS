const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const dotenv = require('dotenv');
const cors = require('cors')
dotenv.config();
const User = require('./models/User')
const Book = require('./models/Book')
const BorrowedBook = require('./models/BorrowedBook')
const Notification = require('./models/Notification')
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/users', async (req, res) => {
  console.log(Object.getOwnPropertyNames(User));
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error', message: error });
  }
},);
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.post('/api/users', async (req, res) => {
  const userData = req.body;
  try {
    console.log(userData)
    const newUser = await User.create(userData);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error', message: error });
  }
},);
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.update(userData);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);

// Routes for books data table
app.get('/api/books', async (req, res) => {
  console.log(Object.getOwnPropertyNames(Book));
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' })
  }
},);
app.get('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.post('/api/books', async (req, res) => {
  const bookData = req.body;
  try {
    const newBook = await Book.create(bookData);
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const bookData = req.body;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.update(bookData);
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.delete('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByPk(id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    await book.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);


// Routes for Borrowed books data table
app.get('/api/borrowed-books', async (req, res) => {
  try {
    const borrowedBooks = await BorrowedBook.findAll();
    res.json(borrowedBooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.get('/api/borrowed-books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const borrowedBook = await BorrowedBook.findByPk(id);
    if (!borrowedBook) {
      return res.status(404).json({ error: 'Borrowed book not found' });
    }
    res.json(borrowedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.post('/api/borrowed-books', async (req, res) => {
  const borrowedBookData = req.body;
  try {
    const newBorrowedBook = await BorrowedBook.create(borrowedBookData);
    res.status(201).json(newBorrowedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.put('/api/borrowed-books/:id', async (req, res) => {
  const { id } = req.params;
  const borrowedBookData = req.body;
  try {
    const borrowedBook = await BorrowedBook.findByPk(id);
    if (!borrowedBook) {
      return res.status(404).json({ error: 'Borrowed book not found' });
    }
    await borrowedBook.update(borrowedBookData);
    res.json(borrowedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.delete('/api/borrowed-books/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const borrowedBook = await BorrowedBook.findByPk(id);
    if (!borrowedBook) {
      return res.status(404).json({ error: 'Borrowed book not found' });
    }
    await borrowedBook.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);

// Routes for Notification data table
app.post('/api/notifications', async (req, res) => {
  const notificationData = req.body;
  try {
    const newNotification = await Notification.create(notificationData);

    // Send email notification
    await sendEmailNotification(newNotification);

    res.status(201).json(newNotification);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
app.get('/api/notifications/user/:user_id', async (req, res) => {
  const { user_id } = req.params;
  try {
    const notifications = await Notification.findAll({
      where: { user_id },
    });
    res.json(notifications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
},);
// app.get('/api/audit-log', auditLogRoutes);
// app.get('/api/reports', reportRoutes);
// app.get('/api/search-history', searchHistoryRoutes);
// app.get('/api/book-recommendations', bookRecommendationRoutes);
// app.get('/api/alerts', alertRoutes);
app.get('/', (req, res) => {
  res.send('Library Management System API');
});

sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => console.log('Error: ' + err));


async function sendEmailNotification(notification) {
  try {
    // Example email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: notification.userEmail, // Assuming you have userEmail in Notification model
      subject: 'New Notification',
      text: `Hello ${notification.username},\n\nYou have a new notification: ${notification.message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email notification sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}
