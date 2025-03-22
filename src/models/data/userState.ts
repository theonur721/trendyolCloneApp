interface Name {
  firstname: string;
  lastname: string;
}

interface Geolocation {
  lat: number;
  lng: number;
}

interface Address {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

interface User {
  id: string;
  name: Name;
  email: string;
  phone: string;
  address: Address;
}

interface UserState {
  user: User | null;
  error: any;
  pending: boolean;
}

export type {UserState};
