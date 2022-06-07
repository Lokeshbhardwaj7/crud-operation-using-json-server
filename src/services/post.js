import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { type } from '@testing-library/user-event/dist/type';


export const postApi = createApi({
    reducerPath: 'postApi', 
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
       }),
       endpoints: (builder) => ({
        getAllPost: builder.query({
         query: () => ({
          url: 'posts',
          method: 'GET'
         })
        }),
        getPostById: builder.query({
            query: (id) => {
             console.log("ID:",id)
                return{
                url: `posts/${id}`,
                method: 'get'
            }
            }
        }),
        getPostByLimit: builder.query({
            query:(num) => {
                console.log("Limit Number:", num)
                return{
                    url: `posts?_limit=${num}`,
                    method: 'GET'
                }
            }
        }),
        deletePost: builder.mutation({
            query:(id) => {
                console.log("Delete Id:", id)
                return{
                    url: `posts/${id}`,
                    method: 'DELETE'
                }
            }
        }),
        createPost: builder.mutation({
            query: (newPost) => {
             console.log("Create Post: ", newPost)
             return {
              url: `posts`,
              method: 'POST',
              body: newPost,
              headers: {
               'Content-type': 'application/json; charset=UTF-8',
              }
             }
            }
           }),
         
    }),
    
})

export const {useGetAllPostQuery, useGetPostByIdQuery, useGetPostByLimitQuery, useDeletePostMutation, useCreatePostMutation} = postApi