const puppeteer = require('puppeteer');
const assert = require('assert');

var id = 645320;

//Create User Acceptance Test'

try {
    (async () => {
        //Get the browser and page details first and make it run in headless mode
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');//This is for the login page

        const loginEmailInput = await page.$('#loginEmail');
        await loginEmailInput.type('admin@gmail.com');

        const loginPasswordInput = await page.$('#loginPassword');
        await loginPasswordInput.type('admin123');

        const loginSubmitBtn = await page.$('#loginSubmitBtn');
        await loginSubmitBtn.click();

        //Set Timeout for the page to 2000ms
        await page.waitForTimeout(2000);

        const pageTitle = await page.title();

        assert(pageTitle === 'Welcome back Admin');
        console.log('Admin Tab Successfully Opened');

        //Get button to add new user
        const addUserBtn = await page.$('#adding');
        await addUserBtn.click();

        //Set the modal to open state
        const addStudentModal = await page.$('#addStudent');
        await addStudentModal.evaluate((el) => el.style.display = 'block');

        // Get StudentID Input
        const studentIDInput = await page.$('#studID');
        await studentIDInput.type(id.toString());

        //Get Student Name Input
        const studentNameInput = await page.$('#studName');
        await studentNameInput.type('Noah Doe John');

        await page.$eval('#mailStud', el => el.value = 'gmmiriam@usiu.ac.ke');

        const studentPasswordInput = await page.$('#studPass');
        await studentPasswordInput.type('john123');

        const courseListChecker = await page.waitForSelector('.courseCheckList');
        await courseListChecker.click();

        const studentRadio = await page.waitForSelector('.studentRadioButton');
        await studentRadio.click();

        const submitUserDetails = await page.$('#addUserDetailsBtn')
        await submitUserDetails.click();

        //Set the modal to closed state
        page.on('dialog', async (dialog) => {
            //get alert message
            console.log(await dialog.message());
            //accept alert
            await dialog.accept();
        });

        await page.waitForNavigation();


        await page.waitForSelector('.userID'); // wait for the element with class 'userID' to appear on the page
        const userID = await page.evaluate(() => Array.from(document.getElementsByClassName('userID'), element => element.textContent));

        if (new Set(userID).size != userID.length) {
            // assert(userID.find(element => element === id.toString()) == null);
            console.log('Error Adding User');
        } else {
            assert(userID.find(element => element === id.toString()) == id.toString());
            console.log('User Added Successfully');
        }


        await browser.close();
    })();
} catch (err) {
    console.error(err);
}