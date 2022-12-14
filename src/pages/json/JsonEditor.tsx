import { useLocalStorageState } from 'ahooks';
import { FC } from 'react';
import { Content, Mode } from 'vanilla-jsoneditor';

import VanillaJSONEditor from '../../components/VanillaJSONEditor';

const JSONBeta: FC = () => {
  const defaultValue = {
    mode: 'text',
    content: {
      text: '',
    },
  };
  const [jsonStorage, setJsonStorage] = useLocalStorageState<any>('json', { defaultValue });

  const resolveMode = (): Mode | undefined => {
    if (jsonStorage === undefined || jsonStorage === null) {
      return Mode.text;
    }
    return jsonStorage.mode as Mode;
  };

  const onChange = (content: Content) => {
    setJsonStorage((oldValue: any) => {
      return { ...oldValue, content: content };
    });
  };

  const onChangMode = (mode: Mode) => {
    setJsonStorage((oldValue: any) => {
      return { ...oldValue, mode: mode };
    });
  };

  return (
    <VanillaJSONEditor
      mode={resolveMode()}
      content={jsonStorage.content}
      onChange={onChange}
      onChangeMode={onChangMode}
    />
  );
};

export default JSONBeta;
