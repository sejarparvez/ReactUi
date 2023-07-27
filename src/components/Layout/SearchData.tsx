export interface SearchResult {
  id: number;
  name: string;
  link: string;
  // Add more properties as needed
}

export const dummySearchQuery: SearchResult[] = [
  { id: 1, name: "Apple", link: "/components" },
  { id: 2, name: "Banana", link: "/blog" },
  { id: 3, name: "Orange", link: "/components" },
  { id: 4, name: "Mango", link: "/documentation" },
  { id: 5, name: "Strawberry", link: "/components" },
  { id: 6, name: "Watermelon", link: "/blog" },
];
