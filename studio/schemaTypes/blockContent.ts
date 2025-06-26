import {defineType, defineArrayMember} from 'sanity'

/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      type: 'image',
      options: {hotspot: true},
    }),
    // Simple Table feature
    defineArrayMember({
      name: 'simpleTable',
      title: 'Table',
      type: 'object',
      fields: [
        {
          name: 'tableCaption',
          title: 'Table Caption',
          type: 'string',
          description: 'Optional caption for the table',
        },
        {
          name: 'hasHeaderRow',
          title: 'Has Header Row',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'rows',
          title: 'Rows',
          type: 'array',
          of: [
            {
              type: 'object',
              name: 'tableRow',
              fields: [
                { name: 'cell1', type: 'string', title: 'Column 1' },
                { name: 'cell2', type: 'string', title: 'Column 2' },
                { name: 'cell3', type: 'string', title: 'Column 3' },
                { name: 'cell4', type: 'string', title: 'Column 4' },
                { name: 'cell5', type: 'string', title: 'Column 5' },
                { name: 'cell6', type: 'string', title: 'Column 6' },
              ],
              preview: {
                select: {
                  cell1: 'cell1',
                  cell2: 'cell2',
                  cell3: 'cell3',
                },
                prepare({ cell1, cell2, cell3 }) {
                  return {
                    title: [cell1, cell2, cell3].filter(Boolean).join(' | '),
                  }
                },
              },
            },
          ],
        },
      ],
      preview: {
        select: {
          rows: 'rows',
          caption: 'tableCaption',
        },
        prepare({ rows, caption }) {
          return {
            title: caption || 'Table',
            subtitle: `${rows?.length || 0} rows`,
          }
        },
      },
    }),
    // YouTube video embedding
    defineArrayMember({
      name: 'youtube',
      title: 'YouTube Video',
      type: 'object',
      fields: [
        {
          name: 'url',
          title: 'YouTube Video URL',
          type: 'url',
          description: 'Paste the YouTube video URL here (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
          description: 'Optional caption for the video',
        },
      ],
      preview: {
        select: {
          url: 'url',
          caption: 'caption',
        },
        prepare({ url, caption }) {
          return {
            title: caption || 'YouTube Video',
            subtitle: url,
          }
        },
      },
    }),
  ],
})
