// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ### Installation
  In the terminal, run:
  \`\`\` ${data.install} \`\`\`
  ### Usage
  ${data.info}
  ### License
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  \n
  This project is covered under the ${data.license} license
  ### Tests
  In the terminal, run:
  \`\`\` ${data.tests} \`\`\`
  ### Contributing
  Please ${data.contribute} before deciding to create a pull request.
  ### Questions
  Username: ${data.username} [GitHub Account](https://github.com/${data.username}/)
  \n
  If you have any questions, please email me at: ${data.email}
`;
}

module.exports = generateMarkdown;
