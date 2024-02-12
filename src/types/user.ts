interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: number,
  geo: {
    lat: number,
    lng: number
  }
}

interface Company {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface User {
  id: number;
  name: string;
  username: string
  email: string;
  address: Address;
  phone: number,
  website: string,
  company: Company
}
