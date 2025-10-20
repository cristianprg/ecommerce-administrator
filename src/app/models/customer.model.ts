export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar: string;
  registrationDate: string;
  totalOrders: number;
  totalSpent: number;
  status: 'active' | 'inactive' | 'blocked';
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  lastOrderDate?: string;
}
