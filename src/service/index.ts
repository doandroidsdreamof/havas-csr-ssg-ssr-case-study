import { gql, request, GraphQLClient } from 'graphql-request';
import { ContentPropsData } from '@/types/interface';

const endpoint: string = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT || '';
export const hygraph = new GraphQLClient(endpoint);

export const QUERY = gql`
  {
    blogsConnection {
      edges {
        node {
          id
          post
          title
          createdAt
          author
          featuredImage {
            id
            url
          }
        }
      }
    }
  }
`;

export async function getData() {
  const posts = await hygraph.request(QUERY);
  const data: ContentPropsData = posts.blogsConnection.edges;
  return data;
}
