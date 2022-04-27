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
function generateMarkdown(data) {
  return `# ${data.title}
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

🚀 ${answers.github}  
🚀 ${answers.deployment}

## Contact

Feel free to contact me with any questions at: ${answers.email}

`;
}

module.exports = generateMarkdown;
