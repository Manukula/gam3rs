<script>
function postComment() {
    // Get the comment input value
    const commentInput = document.getElementById('commentInput').value;

    // Check if the input is empty
    if (!commentInput.trim()) {
        alert('Please enter a comment before posting.');
        return;
    }

    // Display the posted email section
    const postedEmailSection = document.getElementById('postedEmailSection');
    const postedComment = document.getElementById('postedComment');
    postedComment.textContent = commentInput;
    postedEmailSection.style.display = 'block';

    // Clear the input field
    document.getElementById('commentInput').value = '';
}
</script>