import { FC } from 'react';

import SvelteJSONEditor from '../components/SvelteJSONEditor';

const JSONBeta: FC = () => {
  return <SvelteJSONEditor mode="code" content={{ text: '' }} />;
};

export default JSONBeta;
