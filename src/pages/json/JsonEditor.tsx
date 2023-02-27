import { FC } from 'react';
import { Content, Mode } from 'vanilla-jsoneditor';

import VanillaJSONEditor from '../../components/VanillaJSONEditor';
import useJsonEditorStore from '../../stores/JsonEditorStore';

const JSONBeta: FC = () => {
  const { mode, content, setMode, setContent } = useJsonEditorStore();

  const resolveMode = (): Mode | undefined => {
    return mode;
  };

  const onChange = (content: Content) => {
    setContent(content);
  };

  const onChangMode = (mode: Mode) => {
    setMode(mode);
  };

  return <VanillaJSONEditor mode={resolveMode()} content={content} onChange={onChange} onChangeMode={onChangMode} />;
};

export default JSONBeta;
