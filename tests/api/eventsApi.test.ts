import { test } from "@playwright/test";
import EventsApi from "../../pages/api/eventsApi.page";

test("Should Add New Event Successfully", async ({ page, request }) => {
  const eventsApi = new EventsApi(page);
  await eventsApi.getAccessToken(request);
});

test("Should Get And Delete All Events", async ({ page, request }) => {
  const eventsApi = new EventsApi(page);
  await eventsApi.getAndDeleteAllEvents(request);
});
