export type Blog = {
  title: string;
  content: string;
  updatedAt: string;
};
export type PaginatedResponse<T> = {
  data: T;
  nextPage: number | null;
};

export type PaginatedRequestParams = {
  page: number | null;
};

export type RequestByTitleParams = {
  employeeId: string;
};
