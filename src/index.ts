import { OuraRingApiClass } from "./oura-ring-api";

async function main() {
  const ouraApi = new OuraRingApiClass();
  ouraApi
    .getSleepSummary()
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

main().catch((error) => console.error(error));
