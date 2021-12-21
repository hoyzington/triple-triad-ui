import appClient from "./app-client"

export const register = async (newUser: { firstName: string, lastName: string, email: string, username: string, password: string }) => {

  let resp = await appClient.post('/users', newUser);

  if (resp.status == 401) {
    throw resp.data;
  }

  if (resp.status == 201) {
    console.log('User creation success!');
  }

  return resp.data;
}
