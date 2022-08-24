import { KeyBinding } from '@codemirror/view';

const formatJson: KeyBinding = {
  key: 'Alt+Shift+l',
  run: (view) => {
    console.log('aaa');
    return true;
  },
};

const keyBindings = [formatJson];
export default keyBindings;
