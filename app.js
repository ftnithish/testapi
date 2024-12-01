const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });
const products=require('./routes/product')
const orders=require('./routes/order')
app.use(express.json);
app.use('/api/v1/',products);
app.use('/api/v1/',orders);
const connectDatabase=require('./config/connectDatabase');
connectDatabase();


process.on('SIGINT', () => {
  console.log('Shutting down server...');
  process.exit(0);
});
const PORT = process.env.PORT || 8000;

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
});

