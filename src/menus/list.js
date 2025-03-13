import { isCancel, log, select } from '@clack/prompts';
import { taskManager } from '../manager/tasks.js';
import { mainMenu } from './main.js';
import chalk from 'chalk';
import { updateTaskMenu } from './update.js';

export async function listTasksMenu() {
    if (taskManager.tasks.size < 1) {
        log.warn('Nenhuma tarefa registrada!');
        setTimeout(() => {
            mainMenu();
        }, 1000);
        return;
    }

    const selected = await select({
        message: 'Selecione uma tarefa',
        options: [
            ...taskManager.toArray().map(({ name, status }) => ({
                label: `${taskManager.colorStatus(
                    status
                )} ${chalk.white.underline(name)}`,
                value: name,
            })),
            { label: 'Menu principal', value: 'main' },
        ],
    });
    if (isCancel(selected) || selected === 'main') {
        mainMenu();
        return;
    }

    updateTaskMenu(selected);
}
