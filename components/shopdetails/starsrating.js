const StarRating = ({ rating }) => {
    // Generate an array from 1 to 5
    const starIndices = [1, 2, 3, 4, 5];
    
    return (
      <div>
        {starIndices.map((index) => {
          if (index <= rating) {
            // Filled star
            return <span key={index} style={{ color: '#6a994e' }}>⭐</span>;
          } else {
            // Empty star
            return <span key={index} style={{ color: '#6a994e' }}>☆</span>;
          }
        })}
      </div>
    );
  };
  