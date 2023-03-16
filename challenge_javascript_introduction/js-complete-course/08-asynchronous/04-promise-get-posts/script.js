/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    let allPosts;

    document.getElementById("run").addEventListener("click", function () {

        fetch(window.lib.getPosts(function getPost(post) {})
            .then(function (post) {
                console.log(post);

            })
    });
})();
