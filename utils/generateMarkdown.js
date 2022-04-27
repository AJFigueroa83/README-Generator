// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## Description

🔎 ${answers.description}

## Installation

💾 ${answers.installation}

## Purpose

${answers.purpose}

## Usage

!Click [here](${answers.videoLink}) to view the full instructional video.

## License

🪪 ${answers.license}

## Deployment

🚀 Click [here](${answers.github}) to view the repo.  
🚀 Click [here](${answers.deployment}) to view the deployed site.

## Contact

Feel free to contact me with any questions at: ${answers.email}

`;
}

module.exports = generateMarkdown;
