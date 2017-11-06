module.exports = {
	template: 'handlebars',
	prompts: {
		name: {
			required: true,
			message: 'Project name',
			role: 'folder:name'
		},
		global: {
			type: 'string',
			required: true,
			message: 'Global namespace (ex: MyAwesomePlugin)'
		},
		description: {
			required: false,
			message: 'Project description',
			default: 'My Vue Plugin'
		},
		author: {
			message: 'Author',
			role: 'git:name'
		}
	},
	post({log, gitInit, npmInstall, chalk, isNewFolder, folderName}) {
		gitInit();
		npmInstall();
		log.success(`Your new Vue plugin template has been successfully generated in ${chalk.underline(folderName)}!`);
		console.log();
		console.log(chalk.bold(`  To get started:\n`));
		if (isNewFolder) console.log(`  cd ${folderName}`);
		console.log(`  yarn`);
		console.log(`  yarn dev\n`);
		console.log(chalk.bold(`  To build your plugin:\n`));
		console.log(`  yarn build\n`);
	}
};
