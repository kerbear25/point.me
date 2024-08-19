import { useEffect, useState } from 'react';
import Review from '@/data/Review';
import Star from '@/components/Star';
import NavigationButtons from '@/components/NavigationButtons';

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  // Using lastReviewId to disable next page button if last review appears on the page
  const [lastReviewId, setLastReviewId] = useState<number>();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `/api/reviews?page=${currentPage}&pageSize=5`,
        );
        const data: { reviews: Review[]; lastReviewId: number } =
          await response.json();
        setReviews(data.reviews);
        if (!lastReviewId) {
          setLastReviewId(data.lastReviewId);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };

    fetchReviews();
  }, [currentPage, lastReviewId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="flex flex-col pb-12 font-lato">
      <h1 className="text-center text-2xl font-bold">Reviews</h1>
      {reviews.map(({ id, author, rating, review }) => (
        <div key={id} className="p-6 border-b-4 border-indigo-500">
          {[...Array(rating)].map((_, index) => (
            <Star
              key={index}
              hideCursorOnHover={true}
              marked={true}
              starId={index + 1}
            />
          ))}
          {review && <p className="p-2">{review}</p>}
          <p className="p-2 italic">- {author}</p>
        </div>
      ))}

      <NavigationButtons
        currentPage={currentPage}
        isNextDisabled={lastReviewId === reviews[reviews.length - 1].id}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

Reviews.displayName = 'Reviews';
export default Reviews;
