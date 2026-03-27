import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import loginRoutes from './routes/login.routes.js'
import usersRoutes from './routes/users.routes.js'
import serverRoutes from './routes/server.routes.js'

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(usersRoutes);
app.use(serverRoutes);
app.use(loginRoutes);

app.listen(3000, console.log('Running on http://127.0.0.1:3000'));