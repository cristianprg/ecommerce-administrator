export interface Order {
  id: number;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  orderDate: string;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  items: OrderItem[];
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}
