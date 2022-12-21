import Page from "./page";
const requestTimeout = 5000;

class PasteFormPage extends Page {
  get textCode() {
    return $("#postform-text");
  }
  async selectListExpiration(index) {
    await $(".field-postform-expiration").click();
    await $("#select2-postform-expiration-results").$$("li")[index].click();
  }
  get pasteName() {
    return $("#postform-name");
  }
  async selectListSyntaxHighlighting(text, index) {
    await $(".field-postform-format").click();
    await $(".select2-search__field").setValue(text);
    await $("#select2-postform-format-results").$$("li")[index].click();
  }
  get leftMenu() {
    return $(".left").$("a");
  }
  get submitButton() {
    return $("//button[text()='Create New Paste']");
  }
  get messageNote() {
    return $(".info-top");
  }
  get textCodeOne() {
    return $(".bash").$$("li")[0];
  }
  get textCodeTwo() {
    return $(".bash").$$("li")[1];
  }
  get textCodeThree() {
    return $(".bash").$$("li")[2];
  }
  open() {
    return super.open("https://pastebin.com/");
  }
  submit() {
    this.submitButton.waitForClickable({ timeout: requestTimeout });
    return this.submitButton.click();
  }
}

export default new PasteFormPage();
