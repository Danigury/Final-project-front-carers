import { rest } from "msw";
import { tokenToMock, idToMock, LocationsToMock } from "./mockDetails";

export const handlers = [
  rest.post(
    "https://carers-front.herokuapp.com/user/login",
    async (req, res, ctx) => {
      req.body = {
        username: "test",
        password: "fakePassword",
      };
      const respons = res(ctx.json(tokenToMock));
      return respons;
    }
  ),
  rest.post(
    "https://carers-front.herokuapp.com/user/register",
    async (req, res, ctx) => {
      const respons = res(ctx.json(idToMock));
      return respons;
    }
  ),
  rest.get(
    "https://carers-front.herokuapp.com/location",
    async (req, res, ctx) => {
      req.headers.set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTI3MDBmZDZiZjJmOWFiM2M4MDMyZCIsImlhdCI6MTYzODM3MjI0NCwiZXhwIjoxNjM4NTQ1MDQ0fQ.WhcAFsY7Sli5iC22_46_MlbuNJDDZKkZacP3aRS0sdf",
      });
      const respons = res(ctx.json(LocationsToMock));
      return respons;
    }
  ),
];
