import { Request, Response } from "express";
import { Pet, PetType } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;
  if (!query) {
    res.redirect("/");
    return;
  }

  let list = Pet.getFromName({ name: query } as PetType);

  res.render("pages/page", {
    menu: createMenuObject(""),
    list,
    query,
  });
};
