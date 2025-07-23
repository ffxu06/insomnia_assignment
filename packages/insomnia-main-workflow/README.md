# This repository contains the automation scripts for Insomnia

## Initial Dev Setup 
1. git clone https://github.com/xiebohust/insomnia.git
2. Install dependencies: npm install
3. run all tests: npx playwright test
4. run specified test: npx playwright test insomnia-main-workflow/tests/main-workflow.test.ts

## Steps for prject creation:
1. Created a repo in my Github, and then pushed the codes from https://github.com/Kong/insomnia.git to my own repo
2. Created a new branch named main_workflow_cases and then write the scripts under this branch
3. Created a new folder named insomnia-main-workflow packages, and then initilize playwright project using "npm init playwright"
4. Copied the necessary folders/files(fixtures, playwright/server) from insomnia-smoke-test folder
5. Updated package.json and playwright.config.ts based on the ones under nsomnia-smoke-test
6. Write the scripts about main workflow



