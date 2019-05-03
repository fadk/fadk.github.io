


new Vue({
    el: '.index__tile1',
    data : {
        upHere : false
    }

});
new Vue({
    el: '.index__tile2',
    data : {
        upHere : false
    }
});
new Vue({
    el: '.index__tile3',
    data : {
        upHere : false
    }
});

new Vue({
    el: ".banner-item1",
    data:{
        isHovering: false
    }
})
new Vue({
    el: ".banner-item2",
    data:{
        isHovering: false
    }
})
new Vue({
    el: ".banner-item3",
    data:{
        isHovering: false
    }
})
new Vue({
    el: "#les-slider",
    data: () => ({
        slides: [
            { title: 'Акции', content: 'Проект в подарок!', link: '#link-to-article-1', image:'dreamstime4_2000-min.jpg' },
            { title: 'Скидки', link: '#link-to-article-1', image:'dreamstime2_2000-min.jpg' },
            { title: 'Видео', link: '#link-to-article-1', image:'dreamstime3_2000-min.jpg' },
        ]
    })
})