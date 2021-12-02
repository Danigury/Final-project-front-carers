import { rest } from "msw";
import { tokenToMock, idToMock, LocationsToMock } from "./mockDetails";

export const handlers = [
  rest.post(
    "https://proyecto-final-dani-back.herokuapp.com/user/login",
    async (req, res, ctx) => {
      const respons = res(ctx.json(tokenToMock));
      return respons;
    }
  ),
  rest.post(
    "https://proyecto-final-dani-back.herokuapp.com/user/register",
    async (req, res, ctx) => {
      const respons = res(ctx.json(idToMock));
      return respons;
    }
  ),
  rest.get(
    "https://proyecto-final-dani-back.herokuapp.com/location",
    async (req, res, ctx) => {
      const respons = res(ctx.json(LocationsToMock));
      return respons;
    }
  ),
];
