import { format, parseISO } from 'date-fns';

const formatDate = (date: string): string => format(parseISO(date), 'P');

export default formatDate;
