import {Request, Response} from 'express'

export const home = (req: Request, res: Response) => {
  res.send(`Página Inicial`)
}

export const dogs = (req: Request, res: Response) => {
  res.send('Página de Cachorros')
}

export const cats = (req: Request, res: Response) => {
  res.send('Pagina de Gatos')
}

export const fishes = (req: Request, res: Response) => {
  res.send('Página de Peixes')
}