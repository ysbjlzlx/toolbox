import { KeyBinding } from '@codemirror/view';

const formatJson: KeyBinding = {
  key: 'Alt-Shift-f',
  run: (editor) => {
    console.log(editor);
    return true;
  },
};

const keyBindings = [formatJson];
export default keyBindings;
