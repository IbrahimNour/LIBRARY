export interface RESPONSE<T> {
  data: T[];
  error: any;
  isSuccess: boolean;
  message: string;
}

export interface PagenatedParams {
  pageNumber?: number;
  pageSize?: number;
  sortColumn?: string;
  sortDirection?: string;
  search?: string;
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  statusId?: number;
}

export interface PaginateResponse<T> {
  data: {
    items: T;
    countRows: number;
  };
  error: any;
  isSuccess: boolean;
  message: string;
}
