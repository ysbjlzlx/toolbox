import { useLocalStorageState } from 'ahooks';
import type { FC } from 'react';
import type { Content } from 'vanilla-jsoneditor';
import { Mode } from 'vanilla-jsoneditor';

import VanillaJSONEditor from '@/components/VanillaJSONEditor.tsx';

interface Props {
  idx?: string;
}

const JSONBeta: FC<Props> = (props) => {
  const defaultValue = {
    mode: 'text',
    content: {
      text: '',
    },
  };
  const idx = props?.idx || '0';
  const [jsonStorage, setJsonStorage] = useLocalStorageState<any>(`json-${idx}`, { defaultValue });

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
