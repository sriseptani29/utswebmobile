"use client";

import React, { useState, useEffect } from 'react';

interface Comment {
  name: string;
  comment: string;
  rating: number;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    comment: '',
    rating: 0
  });
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  // Mendapatkan komentar dari backend saat halaman dimuat
  useEffect(() => {
    axios.get('http://localhost:5000/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error("Error fetching comments:", error));
  }, []);

  // Menangani perubahan input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Menangani perubahan rating
  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating: rating
    });
  };

  // Mengirim komentar ke backend
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:5000/comments', formData);
      setComments([...comments, response.data]);
      setSubmitted(true);

      setFormData({
        name: '',
        comment: '',
        rating: 0
      });
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  // Menghitung rata-rata rating
  const averageRating = comments.length > 0
    ? comments.reduce((sum, comment) => sum + comment.rating, 0) / comments.length
    : 0;

  return (
    <div style={{ maxWidth: '1400px', margin: '50px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 className="text-xl font-bold mb-4 text-center text-black-600">Berikan Komentar & Rating</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Nama :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd'}}
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="comment">Komentar :</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label>Rating :</label>
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                onClick={() => handleRatingChange(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                style={{
                  cursor: 'pointer',
                  color: star <= (hoverRating || formData.rating) ? '#ffc107' : '#e4e5e9',
                  fontSize: '24px',
                  transition: 'color 0.2s'
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
        
        <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', background: '#007bff', color: '#fff', border: 'none' }}>Kirim</button>
      </form>

      {submitted && (
        <div style={{ marginTop: '15px', color: 'green' }}>
          Terima kasih atas komentar dan rating Anda!
        </div>
      )}

      <div style={{ marginTop: '30px' }}>
        <h3>Rata-rata Rating:</h3>
        <p style={{ fontSize: '24px', color: '#ffc107' }}>
          {averageRating.toFixed(1)} ★
        </p>
      </div>

      <div style={{ marginTop: '20px'}}>
        <h3>Komentar yang Diterima:</h3>
        {comments.length === 0 ? (
          <p>Belum ada komentar.</p>
        ) : (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {comments.map((comment, index) => (
              <li key={index} style={{ 
                  marginBottom: '15px', 
                  padding: '15px', 
                  border: '1px solid #ccc', 
                  borderRadius: '8px', 
                  backgroundColor: '#f9f9f9' 
                }}>
                <strong>{comment.name}</strong> - <span style={{ color: '#ffc107' }}>{comment.rating} ★</span>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ContactForm;