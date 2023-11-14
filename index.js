import { request } from "node:https";

const options = {
  origin: "https",
  host: "api.telegram.org",
  path: `/bot${process.env.TOKEN}/getMe`,
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

const req = request(options, (res) => {
  let rawData = "";
  res
    .on("data", (chunk) => void (rawData += chunk))
    .on("end", () => {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    });
}).on("error", (e) => {
  console.error(e);
  console.error(`Got error: ${e.message}`);
});

req.end();
