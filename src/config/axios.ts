import axios from "axios";

const getApi = () => {
  const token = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDgzMzE5MjIsImV4cCI6MTY0ODQxODMyMiwic3ViIjoiOWUyMzIzZjEtMGQ0MS00ZWI1LWI4NDAtMTAzMGZiZGQ2ZTdmIn0.cxh24l1ZRjxdoi4PlvSssP2MVy4f23Vo0ghAzsXIyow`;
  const api = axios.create({ baseURL: "https://piupiuwer.polijrinternal.com" });

  (api.defaults.headers as any).authorization = token;

  return api;
};

export default getApi;
