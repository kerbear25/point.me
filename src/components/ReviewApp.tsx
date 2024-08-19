import NewReview from '@/components/NewReview';
import Reviews from '@/components/Reviews';

const ReviewApp = () => {
  return (
    <div className="flex">
      <Reviews />
      <NewReview />
    </div>
  );
};

ReviewApp.displayName = 'ReviewApp';
export default ReviewApp;
