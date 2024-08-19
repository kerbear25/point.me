interface NavigationButtonsProps {
  currentPage: number;
  isNextDisabled: boolean;
  setCurrentPage: (page: number) => void;
}

const NavigationButtons = ({
  currentPage,
  isNextDisabled,
  setCurrentPage,
}: NavigationButtonsProps) => {
  return (
    <div className="flex justify-between pt-4">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className={`px-4 py-2 font-semibold rounded-lg flex items-center justify-center
          ${
            currentPage === 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Previous Page
      </button>

      <button
        disabled={isNextDisabled}
        onClick={() => setCurrentPage(currentPage + 1)}
        className={`px-4 py-2 font-semibold rounded-lg flex items-center justify-center
          ${
            isNextDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'
          }`}
      >
        <span className="mr-2">Next Page</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
};

NavigationButtons.displayName = 'NavigationButtons';
export default NavigationButtons;
