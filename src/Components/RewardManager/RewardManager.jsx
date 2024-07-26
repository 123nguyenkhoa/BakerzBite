import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./RewardManager.css";

// Placeholder icons for the tiers
const platinumIcon = "https://via.placeholder.com/20?text=P";
const goldIcon = "https://via.placeholder.com/20?text=G";
const silverIcon = "https://via.placeholder.com/20?text=S";
const bronzeIcon = "https://via.placeholder.com/20?text=B";

const RewardManager = () => {
  const { user } = useContext(ShopContext);

  // Check if user is defined and has rewardPoints and rewardHistory
  if (
    !user ||
    user.rewardPoints === undefined ||
    !Array.isArray(user.rewardHistory)
  ) {
    return <div>Loading...</div>;
  }

  const getMemberTier = () => {
    if (user.rewardPoints >= 5000) {
      return { tier: "Platinum", icon: platinumIcon };
    } else if (user.rewardPoints >= 1000) {
      return { tier: "Gold", icon: goldIcon };
    } else if (user.rewardPoints >= 500) {
      return { tier: "Silver", icon: silverIcon };
    } else {
      return { tier: "Bronze", icon: bronzeIcon };
    }
  };

  const memberTier = getMemberTier();

  // Function to filter reward history
  const filterRewardHistory = (history) => {
    const receivedPointsSet = new Set();
    const filteredEntries = [];

    history.forEach((entry) => {
      const dateKey = new Date(entry.date).toLocaleDateString();
      const key = `${entry.points}-${dateKey}`;

      if (entry.action === "Received points") {
        receivedPointsSet.add(key);
        filteredEntries.push(entry);
      } else if (entry.action === "Used points" && entry.purpose) {
        filteredEntries.push(entry);
      }
    });

    return filteredEntries.filter((entry) => {
      const dateKey = new Date(entry.date).toLocaleDateString();
      const key = `${entry.points}-${dateKey}`;

      if (entry.action === "Used points" && !entry.purpose) {
        return !receivedPointsSet.has(key);
      }

      return true;
    });
  };

  const filteredRewardHistory = filterRewardHistory(user.rewardHistory);

  return (
    <div className="reward-manager">
      <div className="left-side">
        <h2>Account Details</h2>
        <div className="user-info">
          <img
            src={user.photoURL || "https://via.placeholder.com/50"}
            alt="Avatar"
            className="avatar-1"
          />
          <div>
            <p>{user.email || "No email provided"}</p>
            <p>Points: {user.rewardPoints}</p>
            <p>
              Tier: {memberTier.tier}{" "}
              <img
                src={memberTier.icon}
                alt={memberTier.tier}
                className="tier-icon"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="right-side">
        <h3>Reward History</h3>
        <ul className="reward-history">
          {filteredRewardHistory.map((entry, index) => (
            <li key={index}>
              {entry.action === "Received points"
                ? `Received ${entry.points} points on ${new Date(
                    entry.date
                  ).toLocaleDateString()}`
                : `Used ${entry.points} points on ${new Date(
                    entry.date
                  ).toLocaleDateString()}${
                    entry.purpose ? ` (Used for ${entry.purpose})` : ""
                  }`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RewardManager;
