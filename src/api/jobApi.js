export const createJobByEmail = (email, accessToken) => {
  return fetch(`http://localhost:5000/jobs/applications?email=${email}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  }).then((res) => res.json());
};
