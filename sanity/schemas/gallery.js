export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
        {
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            of: [
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
                }
            ]
        },
    ]
};
