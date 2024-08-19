import StarRating from '@/components/StarRating';

const NewReview = () => {
  return (
    <div>
      <h1 className="text-center">New Review</h1>
      <StarRating />
    </div>
  );
};

NewReview.displayName = 'NewReview';
export default NewReview;
