import PocketBase from "pocketbase";
const pb = new PocketBase(process.env.NEXT_PUBLIC_BASE_API);

export async function registerUser() {
  // example create data
  const data = {
    username: "test_username",
    email: "maxim.blohin@live.de",
    emailVisibility: true,
    password: "12345678",
    passwordConfirm: "12345678",
    name: "test",
    totaltodos: 123,
    donetodos: 123,
  };
  const authData = await pb.collection("users").create(data);
  await pb.collection("users").requestVerification("maxim.blohin@live.de");
  console.log(authData);
}
