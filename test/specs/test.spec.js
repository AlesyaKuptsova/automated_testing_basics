import PasteFormPage from '../../pageobjects/pasteform.page';

const stepInfo = console.log;

describe("Test suite", () => {
  it("I Can Win", async () => {
    await PasteFormPage.open();
    await PasteFormPage.textCode.addValue('Hello from WebDriver');
    await PasteFormPage.selectListExpiration(2);
    await PasteFormPage.pasteName.addValue('helloweb');
    await PasteFormPage.submit();

    await expect(PasteFormPage.messageNote).toHaveText("helloweb");
  });

  it("Bring It On", async () => {
    await PasteFormPage.open();
    await PasteFormPage.textCode.addValue('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force');
    await PasteFormPage.selectListSyntaxHighlighting('Bash', 2);
    await PasteFormPage.selectListExpiration(2);
    await PasteFormPage.pasteName.addValue('how to gain dominance among developers');
    await PasteFormPage.submit();

    stepInfo('Step 1: Check the browser page title matches Paste Name / Title');
    await expect(browser).toHaveTitleContaining('how to gain dominance among developers');
    stepInfo('Step 2: Check the syntax is suspended for bash');
    await expect(PasteFormPage.leftMenu).toHaveText("Bash");
    stepInfo('Step 3: Check that the code matches the one entered in "New Paste" field');
    await expect(PasteFormPage.textCodeOne).toHaveTextContaining('git config --global user.name "New Sheriff in Town"');
    await expect(PasteFormPage.textCodeTwo).toHaveTextContaining('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
    await expect(PasteFormPage.textCodeThree).toHaveTextContaining('git push origin master --force');
  });
});