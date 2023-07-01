const homepageController = (req, res) => {
    // res.render('index_pug', {
    //     title: 'homePage',
    //     name: 'For Home Page',
    //     message:
    //         'Ut ea et irure incididunt enim excepteur dolore ex sint reprehenderit ipsum adipisicing. Quis magna proident enim Lorem cupidatat culpa quis in ullamco officia velit pariatur veniam. Sit irure quis irure laborum non adipisicing incididunt anim ut velit. Nulla ex laborum magna officia eiusmod aliqua sunt id pariatur ex dolor ea ex. Ipsum mollit mollit aute est exercitation fugiat commodo cillum.',
    //     imgSrc: 'assets/img/me.jpg',
    // })
    res.render('index_ejs', {
        title: 'homePage',
        name: 'For Home Page',
        message:
            'Ut ea et irure incididunt enim excepteur dolore ex sint reprehenderit ipsum adipisicing. Quis magna proident enim Lorem cupidatat culpa quis in ullamco officia velit pariatur veniam. Sit irure quis irure laborum non adipisicing incididunt anim ut velit. Nulla ex laborum magna officia eiusmod aliqua sunt id pariatur ex dolor ea ex. Ipsum mollit mollit aute est exercitation fugiat commodo cillum.',
        imgSrc: 'assets/img/me.jpg',
    })
}

module.exports = homepageController
