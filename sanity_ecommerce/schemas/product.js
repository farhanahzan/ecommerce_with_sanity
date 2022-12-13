export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'originalprice',
      title: 'Original Price',
      type: 'number',
    },
    {
      name: 'saleprice',
      title: 'Sale Price',
      type: 'number',
    },
    {
      name: 'shortdesc',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'fulldesc',
      title: 'Full Description',
      type: 'string',
    },
    {
      name: 'sku',
      title: 'SKU',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category',
            },
          ],
        },
      ],
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'tag',
            },
          ],
        },
      ],
    },
  ],
}
