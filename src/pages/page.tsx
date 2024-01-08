import { Card } from 'antd';
import { Link } from 'react-router-dom';

import type { Application } from '@/models/Apps.tsx';
import { apps } from '@/models/Apps.tsx';

const Page = () => {
  const item = ({ applications }: { applications: Application[] }) => {
    return applications.map((application) => {
      return (
        <div key={application.name}>
          <Card
            key={application.name}
            title={application.name}
            actions={[
              <Link to={application.href} key="0">
                {application.name}
              </Link>,
            ]}
          >
            <div className="h-32">{application.desc}</div>
          </Card>
        </div>
      );
    });
  };
  return (
    <div className="px-10 py-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {item({ applications: apps })}
      </div>
    </div>
  );
};

export default Page;
