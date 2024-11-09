'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './contactform.css';

type Comment = {
  id: number;
  name: string;
  comment: string;
  rating: number;
};

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  // Fetch comments and calculate average rating on component mount
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setIsLoading(true);
    setError('');
    try {
      const response = await axios.get<Comment[]>('/api/comments');
      setComments(response.data);
      calculateAverageRating(response.data);
    } catch (error: any) {
      const errorMessage = error.response ? error.response.data.error : 'Error fetching comments';
      setError(errorMessage);
      console.error('Error fetching comments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const calculateAverageRating = (comments: Comment[]) => {
    const totalRating = comments.reduce((sum, comment) => sum + comment.rating, 0);
    setAverageRating(totalRating / comments.length || 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !comment || rating === 0) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await axios.post('/api/comments', { name, comment, rating });
      fetchComments(); // Refresh comments after submission
      setName('');
      setComment('');
      setRating(0);
    } catch (error: any) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <section className="contact">
      <div className="contact-form">
        <h2>Leave a Comment & Rating</h2>
        <form onSubmit={handleSubmit}>
          <h4>Name</h4>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <h4>Comment</h4>
          <textarea
            placeholder="Your Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <h4>Rating</h4>
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon
                key={star}
                selected={star <= rating}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        {error && <div className="error-message">{error}</div>}
        <h3>Average Rating: <span className="average-rating">{averageRating.toFixed(1)} ★</span></h3>
        <div className="comments-list">
          {comments.map((c) => (
            <div key={c.id} className="comment">
              <div className="comment-header">
                <strong>{c.name}</strong> - 
                <span className="comment-rating">{c.rating} ★</span>
              </div>
              <p>{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

type StarIconProps = {
  selected: boolean;
  onClick: () => void;
};

const StarIcon: React.FC<StarIconProps> = ({ selected, onClick }) => (
  <span 
    onClick={onClick} 
    style={{ 
      cursor: 'pointer', 
      color: selected ? '#e6b800' : 'gray', 
      fontSize: '24px' 
    }}
  >
    {selected ? '★' : '☆'}
  </span>
);

export default ContactForm;
