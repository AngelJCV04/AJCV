const commentInput = document.getElementById("comment-input");
const submitButton = document.getElementById("submit-button");
const commentContainer = document.querySelector(".comment");

submitButton.addEventListener("click", () => {
    const commentText = commentInput.value;
    if (commentText.trim() !== "") {
        const newComment = document.createElement("div");
        newComment.className = "comment";
        newComment.innerHTML = `<p>${commentText}</p>`;
        commentContainer.appendChild(newComment);
        commentInput.value = "";
    }
});
