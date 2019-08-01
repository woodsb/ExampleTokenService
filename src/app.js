import createError from 'http-errors';
import express from 'express';
import logger from 'morgan';
import path from 'path';
import tokenRouter from './routes/token';

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/token', tokenRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404, '404: Resource not found'));
});

// error handler
app.use((err, req, res) => {
  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err,
  });
});

export default app;
