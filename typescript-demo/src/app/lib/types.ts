export type personType = {
  personName: string;
  personAge: number;
  personLocation: string;
};

//API post object type
export type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type paramsType = {
  params: { id: string };
};
