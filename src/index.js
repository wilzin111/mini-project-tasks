import { intro } from '@clack/prompts';
import chalk from 'chalk';
import { mainMenu } from './menus/main.js';

intro(`📋 ${chalk.bgGreen('Tarefas!')}`);

mainMenu();
