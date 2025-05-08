# LambdaTest Certifications – Playwright 101

This repository contains the solution for the **Playwright 101** certification assignment from LambdaTest Certifications.

## 📋 Project Requirements

- Uses **Playwright v1.52.0**
- Includes 3 different test locators (e.g. CSS, text, ID)
- Tests run in **parallel** on multiple browser/OS combinations via **LambdaTest**
- Video, network logs, console logs, and screenshots are enabled
- LambdaTest test run IDs will be included in the submission

## 🧪 Automated Test Scenarios

1. **Simple Form Demo** – Fill out a text input and verify the displayed message.
2. **Drag & Drop Sliders** – Adjust the slider to a specific value and validate it.
3. **Input Form Submit** – Submit a form both empty and filled, verifying validation and success messages.

## 📦 Useful Scripts

```bash
npm install          # Install dependencies
npm run test         # Run all tests on LambdaTest
npm run test:local   # Run all tests locally
```

## 🚀 Setup <a name="setup"></a>

1. Install dependencies:

```bash
npm install
```

2. Configure LambdaTest credentials:

- Use the `.env.dist` template file by renaming it to `.env` and adding your credentials:

```
LT_USERNAME=your_lambdatest_username
LT_ACCESS_KEY=your_lambdatest_access_key
```

> [!IMPORTANT]  
> Replace with your actual LambdaTest username and access key

## ▶️ How to Run Tests

Run tests on LambdaTest:

```bash
npm run test
```

Run tests locally:

```bash
npm run test:local
```

## Run Playwright Tests In Gitpod

Select the button below to try this demo in Gitpod:

[<img alt="Run in Gitpod" width="200px" align="center" src="https://user-images.githubusercontent.com/70570645/169987363-1408c494-4e2a-4f12-8828-c931eac716b0.png" />](https://gitpod.io/#https://github.com/hernandosebastian/playwright101-lambdatest-assignment)

After the Gitpod session launches:

1. Follow the [Setup instructions](#setup) section above to configure your environment
2. Make sure to rename `.env.dist` to `.env` and add your LambdaTest credentials as shown in the Setup section

For more information on LambdaTest credentials, check [this guide](https://www.lambdatest.com/support/docs/using-environment-variables-for-authentication-credentials/).

## 👤 Author

[https://github.com/hernandosebastian] – Certification Project for LambdaTest

