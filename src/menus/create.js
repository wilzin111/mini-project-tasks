import { log, text } from '@clack/prompts';
import { taskManager } from '../manager/tasks.js';

export async function createTaskMenu() {
    let name;

    do {
        name = await text({
            message: 'Digite o nome da tarefa',
        });
        if (taskManager.tasks.has(name)) {
            log.error('Ja existe uma tarefa com esse nome!');
        }
    } while (taskManager.tasks.has(name));
    console.log(name);
}
