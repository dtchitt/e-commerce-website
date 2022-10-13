const FORMATTER = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency' });

export const formatCurrency = (num: number) => FORMATTER.format(num);
