import { expect } from '@playwright/test';
import { test } from '../playwright/test';
import fs from 'fs';


test.describe('Main Workflow', () => {
    test.beforeAll(async({page})=>{
        // Need to clean the test data before running. not sure which path it is
        // donot know that what the path is. Maybe in Windows it is "AppData\Roaming\Insomnia"
        // and need to add the logic for Widnows and Linux

        // const INSOMNIA_DATA_PATH: string = ""
        // if (fs.existsSync(INSOMNIA_DATA_PATH)) {
        //     fs.rmdirSync(INSOMNIA_DATA_PATH, { recursive: true });
        // }

    });

    test('Create, send and valid a request',  async ({ request, page }) => {
        // Suppose the default page is "New Http Request" page. 
        // Seems after creating a new request, the default page is the previous created request when relauching the App.
        // after I delete the App Data folder(AppData\Roaming\Insomnia) manually, the initialized page is the welcome page
        
        // Create new request, default method is "GET"
        const url: string= 'https://fake-json-api.mock.beeceptor.com/user'
        await page.getByRole('button', { name: 'New HTTP Request' }).click();
        await page.getByTestId('OneLineEditor').first().locator('.CodeMirror').click();
        await page.getByTestId('OneLineEditor').first().locator('.CodeMirror textarea').fill(url);

        // Send request
        await page.getByRole("button", {name: "Send"}).click();

        // Verify response
        await expect(page.getByTestId('response-status-tag')).toContainText('200');
        await expect(page.locator('.response-pane .CodeMirror-code')).toContainText('You have reached the Fake JSON APIs provided by Beeceptor');
    })

})
