import { UserProps } from '@/components/UserCard';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    fetchUserById: builder.query<UserProps, string>({
      query: (id) => `/users/${id}`,
    }),
    fetchUsers: builder.query<{ users: UserProps[] }, void>({
      query: () => '/users',
    }),
  }),
});

export const { useFetchUsersQuery, useFetchUserByIdQuery } = usersApi;
