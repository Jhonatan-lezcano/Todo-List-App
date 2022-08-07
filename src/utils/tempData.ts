export interface lists {
  id: number;
  name: string;
  color: string;
  todos: todos[];
}

export interface todos {
  id: number;
  title: string;
  complete: boolean;
}

export const ListsData: lists[] = [
  {
    id: 1,
    name: "plan to travel tomorrow",
    color: "#24A6D9",
    todos: [
      {
        id: 1,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 2,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 3,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 4,
        title: "Book Flight",
        complete: false,
      },
    ],
  },
  {
    id: 2,
    name: "Shopping List",
    color: "#8022D9",
    todos: [
      {
        id: 1,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 2,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 3,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 4,
        title: "Book Flight",
        complete: false,
      },
    ],
  },
  {
    id: 3,
    name: "Worked",
    color: "#24A6D9",
    todos: [
      {
        id: 1,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 2,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 3,
        title: "Book Flight",
        complete: false,
      },
      {
        id: 4,
        title: "Book Flight",
        complete: false,
      },
    ],
  },
  {
    id: 4,
    name: "Study",
    color: "#8022D9",
    todos: [
      {
        id: 1,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 2,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 3,
        title: "Book Flight",
        complete: true,
      },
      {
        id: 4,
        title: "Book Flight",
        complete: false,
      },
    ],
  },
];
