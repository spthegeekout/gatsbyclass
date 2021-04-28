/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
	siteMetadata:{
		title:'Sean Pisano Presents: The Geek Out',
		description:'The rantings of a crazy geek',
		author:'Sean Pisano : ',
		person:{ name:"sean", age:48 },
		simpleData:['item 1','item 2'],
		complexData: [
		{ name:"sean", age:48 },
		{ name:"john", age:21 },
		],
	},
  plugins: [
	`gatsby-plugin-styled-components`,
	`gatsby-plugin-image`,
	`gatsby-plugin-sharp`,
	`gatsby-transformer-sharp`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ruu6kb88nuer`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },  
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Changa One",
              variants: ["400"],
            },
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400","500","600","700"],
            },
          ],
        },
      },
    },
      `gatsby-plugin-react-helmet`,

  ],
}
