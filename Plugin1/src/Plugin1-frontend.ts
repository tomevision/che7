
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';

export function start() {
    const informationCommand = {
        id: 'information-message-command',
        label: 'information-message-command',
    };
    const informationModalCommand = {
        id: 'information-modal-message-command',
        label: 'Information Modal Message',
    };


    theia.commands.registerCommand(informationCommand, async (...args: any[]) => {
        const action = await theia.window.showInformationMessage('Information message!');
        theia.window.showInformationMessage('Close information message ' + action!);
    });


    theia.commands.registerCommand(informationModalCommand, async (...args: any[]) => {
        const action = await theia.window.showInformationMessage('Information modal message!', { modal: true },
            { title: 'action1' }, { title: 'action2', isCloseAffordance: true }, { title: 'action3' });
        theia.window.showInformationMessage('Resolve ' + action!.title);
    });
}

export function stop() {
}
