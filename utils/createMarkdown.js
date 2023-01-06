// Application in returning a message if user does not want to contribute
function ContributionSection(confirmContributers, data) {
    if (!confirmContributers) {
        return `
  Thank you for your in contributing; unfortunately however, we will not be accepting contributions from third parties.
    `;
    } else {
        return `
  ${data}
    `;
    }
}

// Application in which returns the license badge based on which type of license is passed
// If there is no license return an empty string
function LicenseBadge(license) {
    if (license !== 'no license') {
        return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
    } else {
        return ' ';
    }
}

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
    } else {
        return ' ';
    }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
  ## [License](#table-of-contents)
  Under the following license, the application is covered:
  ${renderLicenseLink(license)}
    `;
    } else {
        return ' ';
    }
}

// Application function that returns license in the form of table of contents
function renderLicenseTOC(license) {
    if (license !== 'no license') {
        return `
  * [License](#license)
    `;
    } else {
        return ' ';
    }
}

// Application to develop a markdown for README
function createMarkdown(data) {
    return `
  # ${data.title}
  

  ${LicenseBadge(data.license)}
  ## Table-of-Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Description](#description)
  ${renderLicenseTOC(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  * [Contributing](#contributing)
  
  
  ## [Description](#table-of-contents)
  ${data.what}
  ${data.why}
  ${data.how}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  Visit the following website for screenshots:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  
  ${ContributionSection(data.confirmContributers, data.contribute)}
  ## [Tests](#table-of-contents)
  ${data.test}
  ## [Questions](#table-of-contents)
  Contact me using the procedings links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = createMarkdown;