export const isAuthenticated = request => {
  if (!request.user) {
    throw Error("Authentification required");
  }
  return;
};
