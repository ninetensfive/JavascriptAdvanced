function posts(){
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this._comments = [];

        }

        addComment(comment){
            this._comments.push(comment);
        }

        toString(){
            let result = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

            if(this._comments.length > 0){
                result += `\nComments:\n`;
                for (let comment of this._comments) {
                    result += ` * ${comment}\n`;
                }

                result = result.trim();
            }

            return result;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = Number(views);
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`;
        }
    }

    return {Post, SocialMediaPost, BlogPost};
}

let postsFunc = posts();
let Post = postsFunc.Post;
let SocialMediaPost = postsFunc.SocialMediaPost;
let BlogPost = postsFunc.BlogPost;


let post = new Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

let test = new SocialMediaPost("TestTitle", "TestContent", 5, 10);
test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());