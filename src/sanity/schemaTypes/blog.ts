import { defineField, defineType, defineArrayMember} from "sanity";

export default defineType ({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
        defineField({
        name: 'heading',
        title: 'Title',
        type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'heading',
            maxLength: 200
        }
    }),
    defineField({
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{
           type: 'author'
        }
    ]

    }),
    
    defineField({
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
            defineArrayMember({
                type: 'string',
            }),
        ]
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true
        }
    }),
]
});