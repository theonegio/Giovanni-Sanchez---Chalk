/*Giovanni Sanchez*/

//For this assignment I used an npm for 'chalk' that would allow me to write text in different colors and styles. 

const chalk = require('chalk');  //This is the import command that placed in order utilize chalk on our code.

const log = console.log;

log();
log(chalk.red.bold('\t\t     Hello and welcome to my chalk story!'));
log();
log(chalk.blue.bold('\t\t\t\tThis One Boy'));
log(`
--------------------------------------------------------------------------
--------------------------------------------------------------------------
| | ${chalk.redBright('Once upon a time there was a young boy')}                             | |
| | ${chalk.redBright('who was very passionate about singing')}                              | |
| | ${chalk.redBright('but he was too scared to make some beats and record his voice.')}     | |
| | ${chalk.yellow('He has thought about this ever since he started his college ')}       | |
| | ${chalk.yellow('journey, he is currently 19 years old and is about to turn 20.')}     | |
| | ${chalk.green('He is about to finish his transfer degree and still wonders what')}   | |
| | ${chalk.green('he wants to do for the rest of his life.')}                           | |
| | ${chalk.cyan('He feels like its too late to start this dream of his, but little')}  | |
| | ${chalk.cyan('does he know that he is still so young and has a whole life')}        | |
| | ${chalk.cyan('ahead of him.')}                                                      | |
| | ${chalk.magenta('He has struggled with having confidence in himself and has')}         | |
| | ${chalk.magenta('heavely compared himself to his peers. However, no one in this')}     | |
| | ${chalk.magenta('world is as unique and amazing as him.')}                             | |
| | ${chalk.red('After he started to realize this, he started to love himself more')}  | |
| | ${chalk.red('and value all the little things and experiences this wonderful')}     | |
| | ${chalk.red('life has offered him.')}                                              | |
| | ${chalk.white('For this reason, he has begun to do things without caring about')}    | |
| | ${chalk.white('what others think, because at the end of the day its his life.')}     | |
| | ${chalk.blue('I hope he can achieve what he has always dreamed about ')}            | |
| | ${chalk.blue('and live happily for the rest of his life.')}                         | |
--------------------------------------------------------------------------
--------------------------------------------------------------------------

${chalk.blue.bold('\t\t\t    By: Giovanni Sanchez                           ')}

`)