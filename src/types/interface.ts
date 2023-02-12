export interface Image {
  url: string;
  id: string;
}

export interface ContentProps {
  id: string;
  post: string;
  title: string;
  createdAt: string;
  featuredImage: Image;
  author: string;
}

export interface ContentPropsData {
  node: ContentProps;
}

export interface SSR {

    node: {
        id: string;
        post: string;
        title: string;
        createdAt: string;
        featuredImage: Image;
        author: string;
    };

}
export interface SSR extends Array<SSR> {}
export interface ContentPropsData extends Array<ContentPropsData> {}
