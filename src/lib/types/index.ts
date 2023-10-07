export type Post = {
  id: string;
  text: string;
  image: string;
  publishDate: string;
};

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};
export type PaginatedResponse<T> = {
  data: T;
  nextPage: number | null;
};
export type RequestByIdParams = {
  id: string;
};
export type CreatePostParams = {
  post: Omit<Post, "id"> & { ownerId: string };
};
export type UpdatePostParams = RequestByIdParams & {
  post: Omit<Post, "id">;
};

export type PaginatedRequestParams = {
  page: number | null;
  title?: string;
};
export type PaginatedRequestByUserParams = PaginatedRequestParams & {
  userId: string;
};
