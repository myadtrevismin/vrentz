export interface Listing{
  unitname: string;
  address: Address;
  previouslease: LeaseDates[];
  status: string;
  lease: boolean;
  image?: string;
  price?: number;
}

export interface LeaseDates{
    from: string;
    to: string;
}

export interface Address{
  street1: string;
  street2?: string;
  city: string;
  zip1: string;
  zip2?: string;
  state: string;
  country: string;
}
