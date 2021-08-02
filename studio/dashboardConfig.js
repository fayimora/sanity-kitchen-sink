export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6107dd8d5cf435fd7de86378',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wkbc7bn1',
                  apiId: '94bc0d24-3e04-407f-9156-5438b3fda89b'
                },
                {
                  buildHookId: '6107dd8de990eebd347a58ec',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bhgrik2a',
                  apiId: 'aaeeffef-f5f4-4ac1-9caa-c07c663865f7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fayimora/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bhgrik2a.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
