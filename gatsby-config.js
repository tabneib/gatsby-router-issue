/* tslint:disable */
module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-tslint`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
            options: {
                prefixes: [`/*`]
            },
            resolve: `gatsby-plugin-create-client-paths`
        },
        {
            options: {
                precision: 8
            },
            resolve: `gatsby-plugin-sass`
        },
        {
            resolve: `gatsby-plugin-manifest`
        }
    ]
};
