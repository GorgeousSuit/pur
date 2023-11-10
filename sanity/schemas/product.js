export const TYPE = [
    { title: 'Coat', value: 'coat' },
    { title: 'Accessory', value: 'accessory' }
];
export const CATEGORY = [
    { title: 'Hat', value: 'hats' },
    { title: 'Cloak', value: 'cloak' },
    { title: 'Vest', value: 'vest' },
    { title: 'Earphones', value: 'earphones' }
];

export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                    options: {
                        source: 'slug',
                        maxLength: 90
                    },
                    hidden: true
                }
            ]
        },
        {
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string',
                    options: {
                        source: 'slug',
                        maxLength: 90
                    },
                    hidden: true
                }
            ]
        },
        {
            name: 'type',
            title: 'Type of product',
            type: 'string',
            options: {
                list: TYPE.map(({ title, value }) => ({ title, value })),
                layout: 'radio'
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'number',
            title: 'Number',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: (document, { parent }) => {
                    const name = document.name;
                    const category = document.category;
                    const number = document.number;
                    const customSlug = `${category}-${name}-${number}`;

                    return customSlug;
                },
                maxLength: 90
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        {
            name: 'size',
            title: 'Size',
            type: 'string',
            hidden: ({ document }) => document.type === 'accessory'
        },
        {
            name: 'length',
            title: 'Length (in CM)',
            type: 'number',
            hidden: ({ document }) => document.type === 'accessory'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: CATEGORY.map(({ title, value }) => ({ title, value })),
                layout: 'radio'
            },
            hidden: ({ document }) => document.type === 'coat'
        }
    ]
};
