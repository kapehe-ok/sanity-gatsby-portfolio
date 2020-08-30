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
                  buildHookId: '5f4c18775bf93098f5ad3374',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-uqxdee8q',
                  apiId: '1947b72f-9466-4290-8bc8-cccf9fd5a2b7'
                },
                {
                  buildHookId: '5f4c1877b850665cf143d3ec',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-wb4m4mtw',
                  apiId: '5cd2858d-c781-494f-ac9f-9e64b0bef45c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-wb4m4mtw.netlify.app',
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
