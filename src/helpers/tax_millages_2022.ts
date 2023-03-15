export interface TaxMillages {
  Municipality: Municipality[];
  School_District: SchoolDistrict[];
}

export interface Municipality {
  Municipality: string;
  Tax_Collector: string;
  Phone: string;
  Millage: string;
  Land_1?: string;
}

export interface SchoolDistrict {
  School_District: string;
  Municipality: string;
  Millage: string;
  Land?: string;
}

import millages from './tax_millages.json';

export const tax_millages = millages as TaxMillages;
