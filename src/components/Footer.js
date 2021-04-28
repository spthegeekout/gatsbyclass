import React from 'react'

const Footer = () => {
	return (
		<footer className="page-footer">
			<p>&copy;{new Date().getFullYear()} <span>Sean Pisano Presents: The Geek Out</span> Built by <a href="http://www.seanpisano.com/">Sean Pisano</a> using <a href="https://www.gatsbyjs.com/">Gatsby</a></p>
		</footer>
	)
}

export default Footer