import express, { Request , Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();
const server = express();

// Config do Template Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Config da Paste Pubic 
server.use(express.static(path.join(__dirname, '../public')));

// Rotas  
server.use(mainRoutes)
server.use((req: Request, res: Response) => {
  res.status(404).render('pages/404');
})
server.listen(process.env.PORT)