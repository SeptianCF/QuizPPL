const { Builder, By, Key, util } = require("selenium-webdriver");

async function loginorange() {
  //buka browser
  let driver = await new Builder().forBrowser("firefox").build();
  let assert = require("assert");
  // buka url google
  try {
  await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/log");
  //await driver.findElement(By.linkText("3. Add a User")).click();
  await driver.findElement(By.name("txtUsername")).sendKeys("opensourcecms");
  await driver.findElement(By.name("txtPassword")).sendKeys("opensourcecms");
  await driver.findElement(By.name("Submit")).click();
  

  const text = await driver.findElement(By.xpath("//li")).getText();
  assert.equal(text, "Welcome Admin", "Tes Fail");
  console.log("Test Success");
} catch (error) {
  console.log("Test Fail");
}
}

loginorange();
 