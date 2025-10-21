export const myApplicationJobs = (email, accessToken) => {
  return fetch(
    `https://career-hub-server-nu.vercel.app/applications?email=${email}`,
    {
      credentials: "include",
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    }
  ).then((res) => res.json());
};
