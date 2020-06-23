module.exports = {
  siteMetadata: {
    title: `Dixit Keshavbhai Patel`,
    titleTemplate: "%s · just another software Engineer",
    blogTitleTemplate: "%s · By Dixit Keshavbhai Patel",
    url: "https://dixitk13.github.io",
    siteUrl: "https://dixitk13.github.io",
    description:
      "Dixit's Home Page. A software engineer, just living life by writing software.",
    image: "/static/img/dixitk13.jpg",
    twitterUsername: "@dixitk13",
  },
  pathPrefix: "/dixitk13.github.io",
  plugins: [
    `gatsby-plugin-sitemap`, //  TODO: maybe customize this later
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-feed-mdx`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                let body = edge.node.html;
                const siteUrl = site.siteMetadata.siteUrl;
                const url = siteUrl + edge.node.frontmatter.path;
                const postText = `<div style="margin-top=60px;">Click Here to read on my website <a href="${url}">clicking here</a></div>`;
                body = body
                  .replace(/href="\//g, `href="${siteUrl}/`)
                  .replace(/src="\//g, `src="${siteUrl}/`)
                  .replace(/"\/static\//g, `"${siteUrl}/static/`)
                  .replace(/,\s*\/static\//g, `,${siteUrl}/static/`);

                return Object.assign({}, edge.node.frontmatter, {
                  url,
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  guid: site.siteMetadata.siteUrl + edge.node.frontmatter.path,
                  custom_elements: [
                    { "content:encoded": body + postText },
                    {
                      "content:tags": formatTags(edge.node.frontmatter.tags),
                    },
                  ],
                });
              });
            },
            query: `
              {
                allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
                  filter: { frontmatter: { type: { eq: "blog" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        title
                        path
                        tags
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Dixit's Blog Feed",
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dixit Keshavbhai Patel`,
        short_name: `dixitk13`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.ico`,
        theme_color_in_head: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-slug-field`,
    //   options: {
    //     source: ["id"],
    //     fieldName: "slug",
    //     urlSlugOptions: {
    //       separator: "_",
    //     },
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `0`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `auto-link-header-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: false,
              elements: [`h1`, `h2`, `h3`, `h4`],
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-copy-linked-files`,
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          // {
          //   resolve: `gatsby-remark-responsive-iframe`,
          //   options: {
          //     wrapperStyle: `margin-bottom: 30px;`,
          //   },
          // },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: null,
              rel: "nofollow noopener noreferrer external",
            },
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              // Deactivate the plugin globally (default: true)
              active: true,
              // Add a custom css class
              class: 'emoji-icon',
              // Select the size (available size: 16, 24, 32, 64)
              size: 64,
              // Add custom styles
              styles: {
                display: 'inline',
                margin: '0',
                'margin-top': '1px',
                position: 'relative',
                top: '5px',
                width: '25px',
              },
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: '›',
              aliases: { js: 'javascript', sh: 'bash' },
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};

const formatTags = (tags) => {
  return tags.reduce(function (prev, curr, idx) {
    return idx == 0 ? `#${curr}` : prev + ' #' + curr
  }, '');
}
