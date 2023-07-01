const homepageController = (req, res) => {
    res.send(`
        <div>
            <h1>Mohamadhasan Binabaji</h1>
            <img src="/assets/img/me.jpg" />
        </div>
    `)
}

module.exports = homepageController
