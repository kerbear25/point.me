import NewReview from '@/components/NewReview';
import Reviews from '@/components/Reviews';

const ReviewApp = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="w-3/5">
        <Reviews />
      </div>
      <div className="w-2/5">
        <NewReview />
      </div>
    </div>
  );
};

ReviewApp.displayName = 'ReviewApp';
export default ReviewApp;
