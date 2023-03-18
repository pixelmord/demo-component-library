module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'packageOrApp',
            default: 'package',
            message: 'Package or App?',
          },
          {
            type: 'input',
            name: 'project',
            default: 'data-table',
            message: 'App or Package Name? e.g "data-table"',
          },
        ])
        .then(({ packageOrApp, project }) => {
          const packageOrAppPath = packageOrApp === 'app' ? 'apps' : 'packages';
          resolve({
            appPath: `${packageOrAppPath}/${project}`,
          });
        });
    });
  },
};
