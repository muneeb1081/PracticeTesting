import { Page } from "@playwright/test";
import { expect } from "@playwright/test";
import { APIRequestContext } from "@playwright/test";
export default class EventsApi {
  constructor(public page: Page) {}

  async getAccessToken(request) {
    const response = await request.post(
      `https://stage-api-dot-project-galileo-dev.uc.r.appspot.com/api/user/login/`,
      {
        data: {
          email: "link2muhammadusman@gmail.com",
          password: "mCz*sG8%472Z",
        },
      }
    );
    expect(response.status()).toBe(200);
    const responseBody = JSON.parse(await response.text());
    return responseBody.access;
  }

  async getAndDeleteAllEvents(request) {
    let eventsArray: any[] = [];
    const accessToken = await this.getAccessToken(request);
    const getAllEvents = await request.get(
      `https://stage-api-dot-project-galileo-dev.uc.r.appspot.com/api/v2/events/?no_page=0&start_date=2022-10-01&end_date=2022-12-31&event_type_1__ne=Campaign&&interval_start_date=2022-10-01`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    expect(getAllEvents.status()).toBe(200);
    const responseBody = JSON.parse(await getAllEvents.text());
    const totalCount = await responseBody.length;

    for (var i = 0; i < totalCount; i++) {
      var obj = responseBody[i];
      for (var key in obj) {
        if (key == "id") {
          eventsArray.push(obj[key]);
        }
      }
    }

    for (var i = 0; i < eventsArray.length; i++) {
      const response = await request.delete(
        `https://stage-api-dot-project-galileo-dev.uc.r.appspot.com/api/v2/events/` +
          eventsArray[i],
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    }
  }
}
