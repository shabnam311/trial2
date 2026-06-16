import React from 'react';
import DashboardTopBar from '../components/dashboard/layout/DashboardTopBar';
import VirtualBalanceCard from '../components/dashboard/widgets/VirtualBalanceCard';
import MilestoneChestsCard from '../components/dashboard/widgets/MilestoneChestsCard';
import FriendActivityCard from '../components/dashboard/widgets/FriendActivityCard';
import DailyMissionsCard from '../components/dashboard/widgets/DailyMissionsCard';
import CurrentJourneyCard from '../components/dashboard/widgets/CurrentJourneyCard';
import RecentAchievementsCard from '../components/dashboard/widgets/RecentAchievementsCard';

const DashboardPage = () => {
  return (
    <div className="w-full min-h-screen">
      {/* Top Bar Area */}
      <DashboardTopBar />

      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column */}
          <div className="w-full lg:w-[60%] flex flex-col min-w-0">
            <VirtualBalanceCard />
            <MilestoneChestsCard />
            <FriendActivityCard />
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[40%] flex flex-col shrink-0 min-w-0">
            <DailyMissionsCard />
            <CurrentJourneyCard />
            <RecentAchievementsCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
