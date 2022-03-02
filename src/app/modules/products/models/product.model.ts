import { EntityState, ID } from "@datorama/akita";

export type AdditionalData = {
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface Product extends AdditionalData {
  id: ID;
  title: string;
  image: string;
}

export interface ProductsState extends EntityState<Product> {
  searchTerm: string;
  filters: {
    limit: number;
    sort: 'desc' | 'asc'
  },
  error: string;
  loading: boolean;
}

export function initialProductsState(): ProductsState {
  return {
    searchTerm: '',
    filters: {
      limit: 10,
      sort: 'desc'
    },
    error: '',
    loading: false
  }
}