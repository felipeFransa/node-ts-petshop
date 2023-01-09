import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';

dotenv.config();
const server = express();

// Config do Template Mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Config da Paste Pubic 
server.use(express.static(path.join(__dirname, '../public')))


server.listen(process.env.PORT)