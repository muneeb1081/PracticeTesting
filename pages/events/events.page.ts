import { Page } from "@playwright/test";
import { expect } from "@playwright/test";

export default class Events {
  constructor(public page: Page) {}

  getAutoComleteSelector() {
    return ".sc-GvhzO.kSqeJg";
  }

  getAutoComleteInputSelector() {
    return ".MuiAutocomplete-input";
  }

  getFilterButtonSelector() {
    return "[data-testid='filters-button']";
  }
  getEventFieldSelector() {
    return ".sc-dksuTV";
  }

  async addNewEvent(data) {
    for (var i = 0; i < data.length; i++) {
      var obj = data[i];
      await this.page.locator("text=Add new event").click();

      //Select Partnername
      await this.page.locator(this.getAutoComleteSelector()).nth(0).click();
      await this.page.type(
        this.getAutoComleteInputSelector(),
        obj.partnerName,
        {
          delay: 500,
        }
      );
      await this.page.locator("text=DE Expert").last().click();

      //Select campaignName
      await this.page.locator(this.getAutoComleteSelector()).nth(1).click();
      await this.page.type(
        this.getAutoComleteInputSelector(),
        obj.campaignName,
        {
          delay: 500,
        }
      );
      await this.page.locator("text=QA Testing").last().click();

      //Select product
      await this.page.locator(this.getAutoComleteSelector()).nth(2).click();
      await this.page.type(this.getAutoComleteInputSelector(), obj.product, {
        delay: 500,
      });
      await this.page.locator("li .MuiCheckbox-root").click();

      //Select activitySubtype
      await this.page.locator("body").click();
      await this.page.waitForTimeout(3000);
      await this.page.locator(this.getAutoComleteSelector()).nth(3).click();
      await this.page.type(
        this.getAutoComleteInputSelector(),
        obj.activitySubtype,
        {
          delay: 500,
        }
      );
      await this.page.locator("text=Digital").last().click();

      //Select tags
      await this.page.locator(this.getAutoComleteSelector()).nth(4).click();
      await this.page
        .locator(this.getAutoComleteInputSelector())
        .fill(obj.tags);

      await this.page.locator("li .MuiCheckbox-root").click();

      //Select googleBudget
      await this.page.locator(this.getAutoComleteSelector()).nth(6).click();
      await this.page.locator("#budget").fill(obj.googleBudget);

      //Select partnerBudget
      await this.page.locator(this.getAutoComleteSelector()).nth(7).click();
      await this.page.type("#partner_budget", obj.partnerBudget);
      await this.page.locator(".sc-bsatvv").click();
      await this.page.locator(".sc-lfRxJW.dTuwOh").click();

      await expect(this.page.locator(".MuiAlert-message")).toHaveText(
        "Activity is saved"
      );
    }
  }

  async verifyEvent(data) {

    await this.page.pause();

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(0)).toHaveText(data.partnerName);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(1)).toHaveText(data.campaignName);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(2)).toHaveText(data.product);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(3)).toHaveText(data.activitySubtype);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(4)).toHaveText(data.tags);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(6)).toHaveText(data.googleBudget);

    await expect(this.page.locator(this.getAutoComleteSelector()).nth(7)).toHaveText(data.partnerBudget);

  }
  
}