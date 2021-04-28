import React from "react"
import Layout from '../components/Layout'
import AllRecipes from '../components/AllRecipes'
import {StaticImage} from 'gatsby-plugin-image'
import {Link} from 'gatsby'
import SEO from '../components/SEO'
export default function Home() {
  return (
	<Layout>
		<SEO title="Home"/>
		<main className="page">
			<header className="hero">
				<StaticImage 
					src="../assets/images/main.jpeg"
					alt="eggs"
					className="hero-img"
					placeholder="tracedSVG"
					layout="fullWidth"
				>
				</StaticImage>
				<div className="hero-container">
					<div className="hero-text">
						<h1>simply recipes</h1>
						<h4>No Fluff, Just Recipes</h4>
					</div>
				</div>
			</header>
		<AllRecipes />			
	</main>
	</Layout>
  )
}
