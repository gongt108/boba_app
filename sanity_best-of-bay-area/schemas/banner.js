export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'smallTitleText',
            title: 'SmallTitleText',
            type: 'string',
        },
        {
            name: 'BigTitleText',
            title: 'BigTitleText',
            type: 'string',
        },
    ],
};