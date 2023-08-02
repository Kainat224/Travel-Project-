import React from "react";

const Stats = ({ items }) => {
  if (!items.length)
    return (
      <p className="stats">Start adding some items in your packing list 🚀 </p>
    );
  const numItem = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have everything! Ready to go ✈ "
          : `You've ${numItem} items on your list, and you already packed ${numPacked}(
        ${percentage}%)`}
      </em>
    </footer>
  );
};

export default Stats;
