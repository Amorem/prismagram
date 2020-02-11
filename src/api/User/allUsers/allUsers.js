import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    allUsers: async () => {
      return prisma.users();
    }
  }
};
