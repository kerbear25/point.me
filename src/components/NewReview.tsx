import StarRating from '@/components/StarRating';

const NewReview = () => {
  return (
    <div className="font-lato font-bold">
      <h1 className="text-center text-2xl">New Review</h1>
      <StarRating />
    </div>
  );
};

NewReview.displayName = 'NewReview';
export default NewReview;
