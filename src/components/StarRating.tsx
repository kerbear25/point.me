import { useState } from 'react';
import Star from '@/components/Star';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StarRating = () => {
  const [author, setAuthor] = useState<string>('');
  const [hoveredRating, setHoveredRating] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const [reviewText, setReviewText] = useState<string>('');

  const handleSubmit = () => {
    // Ensure that the user selected a rating and entered an author,
    // since the Review type in data/Review.ts shows these fields as mandatory
    if (rating !== null && author.trim() !== '') {
      // Show confirmation toast
      toast.success('Review added successfully!');

      // Reset form fields
      setRating(null);
      setAuthor('');
      setReviewText('');
      setHoveredRating(null);
    } else {
      toast.error('Please provide a rating and your name.');
    }
  };

  return (
    <>
      <section className="flex flex-col items-center">
        <div className="flex">
          {[1, 2, 3, 4, 5].map(starId => (
            <Star
              key={starId}
              hideCursorOnHover={false}
              hovered={hoveredRating ? starId <= hoveredRating : false}
              marked={rating ? starId <= rating : false}
              onClick={() => setRating(starId)}
              onHover={() => setHoveredRating(starId)}
              starId={starId}
            />
          ))}
        </div>
        <input
          className="mt-4 px-4 py-2 border rounded"
          onChange={({ target: { value } }) => setAuthor(value)}
          placeholder="Your name"
          type="text"
          value={author}
        />
        <textarea
          className="mt-2 px-4 py-2 border rounded"
          onChange={({ target: { value } }) => setReviewText(value)}
          placeholder="Write your review"
          value={reviewText}
        />
        <input
          className={`mt-10 h-10 px-6 font-semibold rounded-md ${
            rating === null || author.trim() === ''
              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
              : 'bg-black text-white cursor-pointer'
          }`}
          disabled={rating === null || author.trim() === ''}
          onClick={handleSubmit}
          type="submit"
          value="Submit review"
        />
      </section>
      <ToastContainer />
    </>
  );
};

StarRating.displayName = 'StarRating';
export default StarRating;
