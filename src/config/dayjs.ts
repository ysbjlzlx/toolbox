import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import weekday from 'dayjs/plugin/weekday';

import 'dayjs/locale/en';
import 'dayjs/locale/zh-cn';

dayjs.extend(isBetween);
dayjs.extend(weekday);
