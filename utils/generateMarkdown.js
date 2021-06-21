// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderlicenseBadge(license) {
  if (license != "No license") {
    var cert;
    switch (license) {
      case "Apache license 2.0":
        cert = "Apache%20license%202.0";
        break;
      case "Boost Software license 1.0":
        cert = "Boost%20Software%20license%201.0";
        break;
      case "GNU AGPLv3":
        cert = "GNU%20AGPLv3";
        break;
      case "GNU GPLv3":
        cert = "GNU%20GPLv3";
        break;
      case "GNU LGPLv3":
        cert = "GNU%20LGPLv3";
        break;
      case "MIT":
        cert = "MIT";
        break;
      case "Mozilla Public license 2.0":
        cert = "Mozilla%20Public%20license%202.0";
        break;
      case "The Unlicense":
        cert = "unlicense";
        break;
    }
    return `[license badge](https://img.shields.io/badge/license-${cert}-brightgreen)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderlicenseLink(license) {
  if (license != "No license") {
    var cert;
    switch (license) {
      case "Apache License 2.0":
        cert = "apache-2.0";
        break;
      case "Boost Software License 1.0":
        cert = "bsl-1.0";
        break;
      case "GNU AGPLv3":
        cert = "agpl-3.0";
        break;
      case "GNU GPLv3":
        cert = "gpl-3.0";
        break;
      case "GNU LGPLv3":
        cert = "lgpl-3.0";
        break;
      case "MIT":
        cert = "mit";
        break;
      case "Mozilla Public License 2.0":
        cert = "mpl-2.0";
        break;
      case "The Unlicense":
        cert = "unlicense";
        break;
    }
    return `[License badge](https://choosealicense.com/licenses/${cert}/)`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderlicenseSection(license) {
  if (license != "No license") {
    return `
  # license 
  ${renderlicenseLink(license)}`;
  }
  return "";
}

// TODO: Create a function that returns a badge based on which language is passed in
// If there is no badge, return an empty string
function renderBadges(badges) {
  if (badges != "No badges") {
    var lang;
    switch (badges) {
      case "Javascript":
        lang = "Javascript";
        break;
      case "HTML":
        lang = "HTML";
        break;
      case "CSS":
        lang = "CSS";
        break;
      case "Node JS":
        lang = "Node%20JS";
        break;
    }
    return `![Language Badge](https://img.shields.io/static/v1?label=language&message=${lang}&color=brightgreen)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderbadgeLink(badges) {
  if (badges != "No badges") {
    var lang;
    switch (badges) {
      case "Javascript":
        lang = "Javascript";
        break;
      case "HTML":
        lang = "HTML";
        break;
      case "CSS":
        lang = "CSS";
        break;
      case "Node JS":
        lang = "Node%20JS";
        break;
    }
    return `[Language Badge](https://img.shields.io/static/v1?label=language&message=${lang}&color=brightgreen)`;
  }
  return "";
}

// TODO: Create a function that returns the badge section of README
// If there is no badges, return an empty string
function renderbadgeSection(badges) {
  if (badges != "No Badges") {
    return `
  # Badges 
  ${renderbadgeLink(badges)}`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  \n 
  ${renderlicenseBadge(data.license)} 
  \n 
  ${renderBadges(data.badges)}

  # Description
  ${data.description}

  # Table of Contents
  - [Installation](#installation)
  - [Credit](#credit)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [license](#license)
  - [Badges](#badges)
  - [Features](#features)
  - [Tests](#tests)
  - [Questions](#questions)
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Credits
  ${data.credit}

  ${renderlicenseSection(data.license)}

  ${renderbadgeSection(data.badge)}


  # Features
  ${data.features}

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  Github: https://github.com/${data.githubUsername} <br>
  For any questions or concerns, please reach out to me via email: ${data.email}

`;
}

module.exports = generateMarkdown;
