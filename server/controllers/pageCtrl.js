const path = require('path')

module.exports = {
	homeHTML: (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/index.html'))
	},
	homeCSS: (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/styles.css'))
	},
	homeJS: (req, res) => {
		res.sendFile(path.join(__dirname, '../../public/home.js'))
	}
}