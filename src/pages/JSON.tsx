import { FC } from 'react';
import { Mode } from 'vanilla-jsoneditor';
import VanillaJSONEditor from '../components/VanillaJSONEditor';

const JSONBeta: FC = () => {
  return <VanillaJSONEditor mode={Mode.text} content={{ text: '' }} />;
};

export default JSONBeta;
