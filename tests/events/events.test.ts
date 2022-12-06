import { test } from "./../../fixture/fixture";
import EventsApi from "../../pages/api/eventsApi.page";

import Login from "../../pages/login/login.page";
import Events from "../../pages/events/events.page";
import { request } from "@playwright/test";

test.beforeEach(async ({ page, baseURL }) => {
  const loginPage = new Login(page);
  await page.goto(`${baseURL}`);
  await loginPage.login();
});

// test("Should Get And Delete All Events", async ({ page, request }) => {
  //   const eventPage = new EventsApi(page);
  //   await eventPage.getAccessToken(request);
  //   await eventPage.getAndDeleteAllEvents(request);
  // });
  
  test("Should Add New Event Successfully", async ({ page, pageContentData }) => {
    const eventPage = new Events(page);
    await eventPage.addNewEvent(pageContentData.addEvent);
});

// test("Verify Add New Event Successfully", async ({ page, pageContentData }) => {
//   const eventPage = new Events(page);
//   await eventPage.verifyEvent(pageContentData.verifyEvent[0]);
// });






















test('Add event', async ({page, pageContentData }) => { 

  
 })












