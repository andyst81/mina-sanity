export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '601041d6c12988528908d24f',
                  title: 'Sanity Studio',
                  name: 'mina-sanity-studio',
                  apiId: 'e30752ac-b364-49d1-bbbd-28a6e789ee62'
                },
                {
                  buildHookId: '601041d61fa0523593dea7e8',
                  title: 'Blog Website',
                  name: 'mina-sanity',
                  apiId: 'bdce9cf7-9992-447e-bc65-adc20876f08a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/andyst81/mina-sanity',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://mina-sanity.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
