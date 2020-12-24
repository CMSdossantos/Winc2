const imdb = {
    title: 'Star wars',
    duration: '180',
    stars: ['yoda', 'anakin', 'lea']
}

const info = function (obj) {
    console.log(obj.title + ' lasts for about ' + obj.duration + ' minutes.');
    console.log('Stars: ' + obj.stars);
};

info(imdb);