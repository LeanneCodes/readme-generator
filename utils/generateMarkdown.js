// function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}
    ## ${data.description}
    ## Table of Contents
    ### ${data.install}
    ### ${data.usage}
    ### ${data.license}
    ### ${data.contributing}
    ### ${data.tests}
    ### ${data.questions}

`;
}

module.exports = generateMarkdown;
