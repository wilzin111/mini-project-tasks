import { isCancel, outro, select } from '@clack/prompts';
import { createTaskMenu } from './create.js';
import { listTasksMenu } from './list.js';

export async function mainMenu() {
    const opition = await select({
        message: 'Escolha o que dejesa fazer:',
        options: [
            { label: 'Criar nova tarefa', value: 'create' },
            { label: 'Listar tarefas', value: 'list' },
            { label: 'Sair', value: 'end' },
        ],
    });

    if (isCancel(opition)) return;

    switch (opition) {
        case 'create': {
            createTaskMenu();
            return;
        }
        case 'list': {
            listTasksMenu()
            return;
        }
        default: {
            outro('Fim do programa!');
        }
    }
}
