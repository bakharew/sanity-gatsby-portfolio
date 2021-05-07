export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60951841654a582e88e26749',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jgafwfo1',
                  apiId: 'e2348d39-b407-4639-9f77-c086dca35e32'
                },
                {
                  buildHookId: '60951841654a582ca3e26460',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-fwe2uw3h',
                  apiId: '504053c9-6f0c-476c-9fe9-f9fa59aa2e91'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bakharew/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-fwe2uw3h.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
