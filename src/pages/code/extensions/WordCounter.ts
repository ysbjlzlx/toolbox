import { Text } from '@codemirror/state';
import { EditorView, Panel, showPanel } from '@codemirror/view';

const countWords = (doc: Text) => {
  let count = 0;
  let iter = doc.iter();
  while (!iter.next().done) {
    let inWord = false;
    for (let s of iter.value) {
      let word = /\w/.test(s);
      if (word && !inWord) {
        count++;
      }
      inWord = word;
    }
  }
  return `Word count: ${count}`;
};

const wordCountPanel = (view: EditorView): Panel => {
  let dom = document.createElement('div');
  dom.textContent = countWords(view.state.doc);
  return {
    dom,
    update(update) {
      if (update.docChanged) dom.textContent = countWords(update.state.doc);
    },
  };
};

const wordCounter = () => {
  return showPanel.of(wordCountPanel);
};

export { wordCounter };
