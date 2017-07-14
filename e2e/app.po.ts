import { browser, by, element } from 'protractor';

export class MeanPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('clue-root h1')).getText();
  }
}
