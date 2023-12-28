// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  ### Installation
  ${data.install}
  ### Usage
  ${data.info}
  ### License
  ${data.license}
  ### Tests
  ${data.tests}
  ### Contributing
  ${data.contribute}
  ### Questions
  [GitHub Account](https://github.com/${data.username}/)
  Contact info: ${data.email}
`;
}

module.exports = generateMarkdown;
