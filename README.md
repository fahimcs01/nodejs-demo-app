# nodejs-demo-app



Node.js Demo App with CI/CD
This is a simple Node.js application deployed using Render and automated via GitHub Actions for CI/CD.
Project Overview
Node.js app built with Express.js

Automatically deploys to Render whenever changes are pushed to the main branch

Includes a placeholder test script for CI/CD
Features
Hello world endpoint: / → returns "Hello from Node.js!"

CI/CD pipeline:
1.Checkout repository

2.Install dependencies (npm install)

3.Run tests (npm test)

4.Deploy to Render
Automatic deployment ensures your app is always up-to-date on Render
Setup Locally
1.Clone the repository:
git clone https://github.com/fahimcs01/nodejs-demo-app.git
cd nodejs-demo-app
2.Install dependencies:
npm install
3.Run the app locally:
node app.js
4.Visit the app in your browser:
http://localhost:4000
Note: On Render, the app uses the port assigned by process.env.PORT.
CI/CD Workflow
Workflow file: .github/workflows/nodejs-ci-cd.yml

Runs automatically on push or pull request to main branch

Deploys to Render using the Render API
Required GitHub Secrets:
Secret Name	Description
RENDER_API_KEY	Render API key
RENDER_SERVICE_ID	Render service ID
Deployment
Deployed to Render:
[Your Render URL here]
To test CI/CD:
1.Make changes in app.js

2.Commit and push to main

3.GitHub Actions runs tests and deploys automatically

4.Verify the updated app at the Render URL
