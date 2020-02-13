import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import "./env";
import schema from "./schema";
import { sendSecretMail } from "./utils";
import "./passport";
import passport from "passport";

const PORT = process.env.PORT || 4003;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));
server.express.use(passport.authenticate("jwt"));

server.start({ port: PORT }, () =>
  console.log(`Server running http://localhost:${PORT}`)
);
