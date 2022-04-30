// TODO: Create a function that returns a license badge based on which license is passed in

const incrementListIndex = require("inquirer/lib/utils/incrementListIndex");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'Apache') {
    license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return license;
  } else {
    if (license == 'MIT') {
      license = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      return license;
    } else {
      if (license == 'IBM') {
        license = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
        return license;
      } else { 
        if (license == 'ISC') {
          license = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
          return license;
        } else {
          if (license == 'GNU') {
            license = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
            return license;
          } else {
            if (license == 'Mozilla') {
              license = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
              return license;
            } else {
              if (license == 'WTFPL') {
                license = `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`
                return license;
              } else {
                return
              }
            }
          }
        }
      }
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'Apache') {
    license = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    return license;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
    `
    } else {
      return
    }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
## ${renderLicenseSection(answers.license)}

## Description

🔎 ${answers.description}

## Installation

💾 ${answers.installation}

## Purpose

${answers.purpose}

## Usage

Click [here](${answers.videoLink}) to view the full instructional video.

## Deployment

🚀 Click [here](${answers.github}) to view the repo.  
🚀 Click [here](${answers.deployment}) to view the deployed site.

## Contact

Feel free to contact me with any questions at: ${answers.email}

`;
}

module.exports = generateMarkdown;