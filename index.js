const express = require('express');
const student = require('./controller/student/student.controller');
const employee = require('./controller/employee/employee.controller');
const logger = require('./middleware/logger');
const login = require('./controller/login/login.controller');
const verifytoken = require('./authentication/verifytoken');

const app = express();
const port = 3000;
app.use(express.json());
app.use(logger);
app.get('/', (req, res) => {
  res.send('welcome to the website use /emp, /student and /login');
});

app.use('/login', login);
app.use(verifytoken);
app.use('/emp', employee);
app.use('/student', student);

app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  /* res.locals.message = err.message;
res.locals.error = req.app.get("env")==="development"?err:{};
res.status(err.status || 500).send("somthing is broke",err) */
  console.log(err);
});
app.listen(port, () => {
  console.log(`server started at ${port}`);
});
