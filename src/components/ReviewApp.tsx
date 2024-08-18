import StarRating from '@/components/StarRating';
import { useEffect, useState } from 'react';
import Review from '@/data/Review';

const ReviewApp = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  // Using lastReviewId to disable next page button if last review appears on the page
  const [lastReviewId, setLastReviewId] = useState<number>();
  // Tip: You can grab data with fetch or an HTTP client of your choice:
  //      await fetch("http://localhost:3000/api/reviews")
  //      await axios.get("http://localhost:3000/api/reviews")

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
    <div>
      <StarRating />
      {/* TODO: Add styling to appear as disabled when disabled */}
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous Page
      </button>
      {/* TODO: Add styling to appear as disabled when disabled */}
      <button
        disabled={lastReviewId === reviews[reviews.length - 1].id}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next Page
      </button>
    </div>
  );
};

ReviewApp.displayName = 'ReviewApp';
export default ReviewApp;
