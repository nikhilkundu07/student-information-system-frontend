let posts = [
    {user: "travel_guru", likes: 230, comments: 20, time: 1, followed: true, img: "https://picsum.photos/id/1015/400/400"},
    {user: "foodie_life", likes: 180, comments: 15, time: 2, followed: false, img: "https://picsum.photos/id/1080/400/400"},
    {user: "nature_vibes", likes: 300, comments: 40, time: 1, followed: true, img: "https://picsum.photos/id/1043/400/400"},
    {user: "city_clicks", likes: 120, comments: 10, time: 4, followed: false, img: "https://picsum.photos/id/1011/400/400"},
    {user: "fit_lifestyle", likes: 260, comments: 30, time: 2, followed: true, img: "https://picsum.photos/id/1005/400/400"}
];

// Algorithm
function calculateScore(post) {
    let recency = 100 - post.time * 10;
    let interaction = post.followed ? 20 : 0;
    return (post.likes * 5) + (post.comments * 3) + recency + interaction;
}

// Display posts
function displayPosts() {
    let feed = document.getElementById("feed");
    feed.innerHTML = "";

    posts.forEach((post, index) => {
        let div = document.createElement("div");
        div.className = "post";

        div.style.animation = "fadeIn 0.5s";

        div.innerHTML = `
            <div class="post-header">
                <img src="https://i.pravatar.cc/35?${index}">
                <b>${post.user}</b>
            </div>

            <img src="${post.img}">

            <div class="icons">
                <span onclick="likePost(${index})">❤️</span>
                <span>💬</span>
                <span>📤</span>
            </div>

            <div style="padding:5px 8px">
                <b>${post.likes}</b> likes
            </div>
        `;

        feed.appendChild(div);
    });
}

// Like button
function likePost(index) {
    posts[index].likes += 10; // bigger jump for visible change
    displayPosts();
}

// 🔥 AUTO UPDATE EVERY 10 SECONDS
setInterval(() => {
    // simulate random likes increase
    posts.forEach(post => {
        post.likes += Math.floor(Math.random() * 20);
    });

    // sort based on updated scores
    posts.sort((a, b) => calculateScore(b) - calculateScore(a));

    displayPosts();

}, 10000);

// initial render
displayPosts();