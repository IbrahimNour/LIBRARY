export interface SUGGESTED_TYPES extends Category {
  createdAt?: string;
  id?: number;
  name?: string;
  statusId?: number;
  updatedAt?: string;
}

export interface Category {}

export interface Category_Paginated {
  pageNumber?: number;
  pageSize?: number;
  sortColumn?: string;
  sortDirection?: string;
  search?: string;
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  parentId?: number;
  statusId?: number;
}

export interface Category {
  createdAt?: string;
  description?: string;
  id?: number;
  level?: number;
  name?: string;
  parentId?: number;
  statusId?: number;
  subCategories?: any[];
  updatedAt?: string;
  createdBy?: string;
}

export interface Bulk {
  assetTypeId: number | null;
  categories?: Category[];
}
