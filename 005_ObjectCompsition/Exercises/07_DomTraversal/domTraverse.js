function domTraverse(selector){
    let targetElements = $(selector);
    let deepestElement;
    let maxDepth;

    targetElements.each(function () {
        maxDepth = 0;
        let targetElement = $(this);
        deepestElement = targetElement;

        dfs(targetElement, maxDepth);

        while (!deepestElement.is(targetElement.parent()))
        {
            deepestElement.addClass("highlight");
            deepestElement = deepestElement.parent();
        }
    });

    function dfs(currentElement, depth) {
        if(maxDepth < depth){
            maxDepth = depth;
            deepestElement = currentElement;
        }

        let children = currentElement.children();
        for (let child of children) {
            dfs($(child), depth + 1);
        }
    }
}