import { Request, Response } from 'express';

export const home =  (req: Request, res: Response) => {
  res.send('home')
}
export const dogs =  (req: Request, res: Response) => {
  res.send('pages/cachorros')
}
export const cats =  (req: Request, res: Response) => {
  res.send('pages/gatos')
}
export const fishes =  (req: Request, res: Response) => {
  res.send('pages/peixes')
}