import { isCancel, select } from '@clack/prompts';

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
    console.log(opition);
}
