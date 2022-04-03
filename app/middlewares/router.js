//^import modules
const express = require('express');
const infos = require('../data/infos');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('pages/home', {
        title: 'Home',
        titleBanner: infos.infosPages[0].titleBanner,
        jsFile: 'home.js'
    });
});

router.get('/:page', (req, res, next) => {
    let infos = req.app.locals.infos;
    let page = req.params.page;
    

    for (let pageInfo of infos.infosPages) {
        if (page === pageInfo.name) {
            res.render(`pages/${page}`, {
                title: `${pageInfo.title}`,
                titleBanner: `${pageInfo.titleBanner}`,
                cssPagesFile: `${pageInfo.cssFile}`,
                jsFile: `${pageInfo.jsFile}`
            });

            return;
            
        }
    };

    next();

});

module.exports = router;