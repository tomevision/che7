
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
    const inputbox = {
        id: 'inputbox-modal-message-command',
        label: 'InputBox Modal Message',
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
    theia.commands.registerCommand(inputbox, async (...args: any[]) => {
        const option: theia.InputBoxOptions = {
            prompt: "Hello from Plugin",
            placeHolder: "Type text there",
            ignoreFocusOut: false,
            password: false,
            value: "Default value"

        };
        theia.window.showInputBox(option).then((s: string | undefined) => {
            console.log(typeof s !== 'undefined' ? s : "Input was canceled");
            theia.window.showInformationMessage(typeof s !== 'undefined' ? s : "Input was canceled", { modal: true }, );
        });

    });
}

export function stop() {
}
