function getArticleGenerator(articles){
    return function () {
        if(articles.length > 0) {
            let content = $("#content");
            $("<article>")
                .text(articles[0])
                .appendTo(content);
            articles.shift();
        }
    }
}