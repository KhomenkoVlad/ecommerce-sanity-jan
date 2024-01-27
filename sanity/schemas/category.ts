export default {
  name: "category",
  type: "document",
  title: "Categories",
  fields: [
    {
      name: "name",
      title: "Name of Category",
      type: "string",
    },
    {
      name: "slug",
      title: "Category Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
  ],
};
