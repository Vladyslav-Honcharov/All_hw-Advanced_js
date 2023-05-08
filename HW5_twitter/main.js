const wrapper = document.querySelector(".wrapper");

class Card {
  constructor(name, email, title, body) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.body = body;
  }
  async addAndRemoveCard() {
    let responseUsers = await fetch(
      "https://ajax.test-danit.com//api/json/users"
    );
    let users = await responseUsers.json();
    // console.log(users);
    let responsePosts = await fetch(
      "https://ajax.test-danit.com/api/json/posts"
    );
    let posts = await responsePosts.json();
    // console.log(posts);
    const postsWithUsers = [];
    for (let post of posts) {
      const user = users.find((u) => u.id === post.userId);
      postsWithUsers.push({ ...post, user });
      // console.log(postsWithUsers);
    }
    for (let postWithUser of postsWithUsers) {
      const {
        title,
        body,
        user: { name, email },
        id,
      } = postWithUser;
      const post = document.createElement("div");
      post.classList.add("post");

      post.setAttribute("data-id", id);

      post.innerHTML = `
        <div class="post__header">
          <div class="user__name">${name}</div>
          <div class="user__email">${email}</div>
          <button  class="btn">X</button>
        </div>
  
        <div class="post__title">${title}</div>
        <div class="post__body">${body}</div>
     `;
      wrapper.append(post);

      const deleteButton = post.querySelector(".btn");
      deleteButton.addEventListener("click", async () => {
        const response = await fetch(
          `https://ajax.test-danit.com/api/json/posts/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          post.remove();
        }
      });
    }
  }
}

let cards = new Card();
cards.addAndRemoveCard();
