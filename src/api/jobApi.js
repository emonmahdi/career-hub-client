export const createJobByEmail = (email, accessToken) => {
  return fetch(
    `https://career-hub-server-nu.vercel.app/jobs/applications?email=${email}`,
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    }
  ).then((res) => res.json());
};
