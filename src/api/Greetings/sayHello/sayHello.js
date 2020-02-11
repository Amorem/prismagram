import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    sayHello: async () => {
      console.log("called", await prisma.users());
      return "Hello !!!";
    }
  }
};
