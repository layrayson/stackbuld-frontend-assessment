export type Post = {
  id: string;
  text: string;
  image: string;
  publishDate: string;
  owner: User;
};

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};
export type PaginatedResponse<T> = {
  data: T[];
  page: number;
  total: number;
};
export type RequestByIdParams = {
  id: string;
};
export type CreatePostParams = {
  post: Omit<Post, "id" | "publishDate" | "owner"> & { owner: string };
};
export type UpdatePostParams = RequestByIdParams & {
  post: Omit<Post, "id" | "publishDate" | "owner">;
};

export type PaginatedRequestParams = {
  page?: number | string;
  title?: string;
};
export type PaginatedRequestByUserParams = PaginatedRequestParams & {
  userId: string;
};
