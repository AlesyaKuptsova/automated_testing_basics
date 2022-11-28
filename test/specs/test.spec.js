const stepInfo = console.log;
const requestTimeout = 3000;

describe("Test suite", () => {
  it("I Can Win", async () => {
    // Open https://pastebin.com or a similar service in any browser
    await browser.url("https://pastebin.com");
    // Create a New Paste with the following details:
    stepInfo('Step 1: Enter "Hello from WebDriver" value in the "New Paste" field');
    const textCode = await $("#postform-text");
    await textCode.waitForDisplayed({ timeout: requestTimeout });
    await textCode.setValue("Hello from WebDriver");
    stepInfo('Step 2: Select "10 Minutes" value from the "Paste Expiration:" list');
    const selectListExpiration = await $(".field-postform-expiration");
    await selectListExpiration.click();
    await $("#select2-postform-expiration-results").$$("li")[2].click();
    stepInfo('Step 3: Enter "helloweb" value in the "Paste Name / Title:" field');
    await $("#postform-name").setValue("helloweb");
    stepInfo('Step 4: Click "Create New Paste" button');
    const buttonCreateNewPaste = await $("//button[text()='Create New Paste']");
    await buttonCreateNewPaste.waitForClickable({ timeout: requestTimeout });
    await buttonCreateNewPaste.click();

    const messageNote = await $(".info-top");
    expect(await messageNote.getText()).toEqual("helloweb");
  });

  it("Bring It On", async () => {
    // Open https://pastebin.com or a similar service in any browser
    await browser.url("https://pastebin.com");
    // Create a New Paste with the following details:
    stepInfo('Step 1: Enter value in the "New Paste" field');
    const textCode = await $("#postform-text");
    await textCode.waitForDisplayed({ timeout: requestTimeout });
    await textCode.setValue('git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force');
    stepInfo('Step 2: Select "Bash" value from the "Syntax Highlighting:" list');
    const selectListSyntaxHighlighting = await $(".field-postform-format");
    await selectListSyntaxHighlighting.click();
    const searchInput = await $(".select2-search__field");
    await searchInput.setValue("Bash");
    await $("#select2-postform-format-results").$$("li")[2].click();
    stepInfo('Step 3: Select "10 Minutes" value from the "Paste Expiration:" list');
    const selectListExpiration = await $(".field-postform-expiration");
    await selectListExpiration.click();
    await $("#select2-postform-expiration-results").$$("li")[2].click();
    stepInfo('Step 4: Enter "how to gain dominance among developers" value in the "Paste Name / Title:" field');
    await $("#postform-name").setValue("how to gain dominance among developers");
    stepInfo('Step 5: Click "Create New Paste" button');
    const buttonCreateNewPaste = await $("//button[text()='Create New Paste']");
    await buttonCreateNewPaste.waitForClickable({ timeout: requestTimeout });
    await buttonCreateNewPaste.click();
    stepInfo('Step 6: Check the browser page title matches Paste Name / Title');
    await expect(browser).toHaveTitleContaining('how to gain dominance among developers');
    stepInfo('Step 7: Check the syntax is suspended for bash');
    const leftMenu = await $('.left').$('a');
    expect(await leftMenu.getText()).toEqual("Bash");
    stepInfo('Step 8: Check that the code matches the one entered in step 1');
    const textCodeOne = await $('.bash').$$('li')[0];
    expect (await textCodeOne.getText()).toEqual('git config --global user.name "New Sheriff in Town"');
    const textCodeTwo = await $('.bash').$$('li')[1];
    expect (await textCodeTwo.getText()).toEqual('git reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")');
    const textCodeThree = await $('.bash').$$('li')[2];
    expect (await textCodeThree.getText()).toEqual('git push origin master --force');
  });
});