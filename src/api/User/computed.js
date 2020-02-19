import { prisma } from "../../../generated/prisma-client";

export default {
  User: {
    fullname: parent => {
      return `${parent.firstName} ${parent.lastname}`;
    },

    isFollowing: async (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      try {
        return await prisma.$exists.user({
          where: {
            AND: [{ id: user.id }, { following_some: { id: parentId } }]
          }
        });
      } catch (error) {
        console.log(error);
        return false;
      }
    },
    isSelf: (parent, _, { request }) => {
      const { user } = request;
      const { id: parentId } = parent;
      return user.id === parent.id;
    }
  },
  Post: {
    isLiked: async (parent, _, { request }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [{ user: { id: user.id } }, { post: { id } }]
      });
    }
  }
};
