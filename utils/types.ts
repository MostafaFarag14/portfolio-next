export interface Tool {
  title: string;
  imgUrl: string;
  wideImage?: boolean;
}

export interface Project {
  name: string;
  url?: string;
  code?: string;
  image: string;
  tools: Tool[];
  description: string;
  reviewUrl?: string;
}
