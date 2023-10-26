export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
		name: "image",
		title: "Image",
		type: "image",
		options: { hotspot: true },
		fields: [
		  {
			name: "alt",
			title: "Alt",
			type: "string"
		  }
		]
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
      }
    },
    { 
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    { 
      name: 'number',
      title: 'Number',
      type: 'number',
    },
    { 
      name: 'size',
      title: 'Size',
      type: 'string',
    },
    { 
      name: 'length',
      title: 'Length',
      type: 'number',
    },
  ]
}