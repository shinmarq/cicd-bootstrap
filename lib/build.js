const shell = require('shelljs');
const fs = require('fs');

module.exports = (args, options, logger) => {
    const pipTemplate = options.tp || 'backend';
    const templatePath = `${__dirname}/../templates/${args.template}/${pipTemplate}`;
    const localPath = process.cwd();

    if (fs.existsSync(templatePath)) {
        logger.info(`Start bootstrapping ${pipTemplate} pipeline...`);
        shell.cp('-R', `${templatePath}/{,.[!.],..?}*`, localPath);
        logger.info('✔ Pipeline created!');
    } else {
        logger.error(`The requested template for ${args.template} wasn't found.`)
        process.exit(1);
    }

    // Remove variables file from the current directory
    // since it only is needed on the template directory
    if (fs.existsSync(`${localPath}/_variables.js`)) {
        shell.rm(`${localPath}/_variables.js`);
    }
};