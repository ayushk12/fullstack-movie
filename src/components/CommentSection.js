import React from 'react';

const CommentSection = ({ comments, setComment, addComment }) => {
    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>{comment.text}</li>
                ))}
            </ul>
            <textarea onChange={(e) => setComment(e.target.value)} />
            <button onClick={addComment}>Add Comment</button>
        </div>
    );
};

export default CommentSection;
