// *** task1 ***

const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe("Check the state of element", () => {
    it("Verify dropdown options state", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://the-internet.herokuapp.com/dropdown');
            
            // Find the dropdown element
            const dropdown = await driver.findElement(By.css('#dropdown'));

            // Verify that the first option is disabled
            const firstOption = await dropdown.findElement(By.css('option[value=""]'));
            const isDisabled = await firstOption.getAttribute('disabled');
            assert.strictEqual(isDisabled, 'true', 'First option should be disabled');

            // Select "Option 1"
            await dropdown.findElement(By.css('option[value="1"]')).click();

            // Verify that "Option 1" is selected
            const isSelected = await dropdown.findElement(By.css('option[value="1"]')).isSelected();
            assert.strictEqual(isSelected, true, 'Option 1 should be selected');
        } finally {
            await driver.quit();
        }
    });
});





// *** task2 ***

describe("Hovering the mouse over an element", () => {
    it("Verify text appears after hovering over user avatar", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://the-internet.herokuapp.com/hovers');
            
            // Find the element containing the user avatar image
            const userAvatar = await driver.findElement(By.css('.figure'));

            // Hover over the user avatar
            await driver.actions().move({origin: userAvatar}).perform();

            // Wait for the text to appear
            await driver.wait(until.elementLocated(By.css('.figcaption h5')), 5000);

            // Get the text that appears after hovering
            const textAfterHover = await driver.findElement(By.css('.figcaption h5')).getText();

            // Verify that the text "name: user1" appears
            assert.strictEqual(textAfterHover, 'name: user1', 'Text did not appear after hovering over user avatar');
        } finally {
            await driver.quit();
        }
    });
});





// *** task3 ***

describe("Filling out the form", () => {
    it("Submit the form and verify success message", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://formy-project.herokuapp.com/form');

            // Fill out the text fields
            await driver.findElement(By.id('first-name')).sendKeys('Peter');
            await driver.findElement(By.id('last-name')).sendKeys('Peterson');
            await driver.findElement(By.id('job-title')).sendKeys('tester');

            // Select radio button for highest level of education
            await driver.findElement(By.id('radio-button-1')).click();

            // Select checkbox for sex
            await driver.findElement(By.id('checkbox-1')).click();

            // Select option from drop-down for years of experience
            await driver.findElement(By.id('select-menu')).click();
            await driver.findElement(By.css('option[value="2"]')).click();

            // Fill out the date field
            await driver.findElement(By.id('datepicker')).sendKeys('12/12/2020');

            // Submit the form
            await driver.findElement(By.css('.btn.btn-lg.btn-primary')).click();

            // Wait for success message to appear
            await driver.wait(until.elementLocated(By.css('.alert.alert-success')), 5000);

            // Verify success message
            const successMessage = await driver.findElement(By.css('.alert.alert-success')).getText();
            assert.strictEqual(successMessage, 'The form was successfully submitted!', 'Success message not found');
        } finally {
            await driver.quit();
        }
    });
});





// *** task4 ***

describe("Sorting the table", () => {
    it("Sort the table by 'Due' column and verify the values are sorted in ascending order", async () => {
        const driver = await new Builder().forBrowser('chrome').build();
        try {
            await driver.get('http://the-internet.herokuapp.com/tables');

            // Scroll to the second table
            await driver.executeScript("arguments[0].scrollIntoView()", await driver.findElement(By.id('table2')));

            // Click on the 'Due' column header to sort the table
            await driver.findElement(By.css('#table2 thead th:nth-child(4)')).click();

            // Get the values of the 'Due' column
            const dueColumnValues = await driver.findElements(By.css('#table2 tbody td:nth-child(4)'));
            const dueValues = await Promise.all(dueColumnValues.map(async (element) => await element.getText()));

            // Convert the values to numbers for comparison
            const numericDueValues = dueValues.map(value => parseFloat(value.replace('$', '')));

            // Verify the values are sorted in ascending order
            for (let i = 0; i < numericDueValues.length - 1; i++) {
                assert.ok(numericDueValues[i] <= numericDueValues[i + 1], 'Values are not sorted in ascending order');
            }
        } finally {
            await driver.quit();
        }
    });
});
