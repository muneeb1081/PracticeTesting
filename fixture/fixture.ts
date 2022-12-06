import { test as baseTest } from "@playwright/test";
import pageContent from "../fixture/pageContent.json";

type pageData = {
  pageContentData: typeof pageContent;
};

const fixture = baseTest.extend<pageData>({
  pageContentData: pageContent,
});

export const test = fixture;
