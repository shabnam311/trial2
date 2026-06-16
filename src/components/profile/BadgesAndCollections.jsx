import React from 'react';
import { Lock, Crown, Flame, BookOpen, PiggyBank, Sun, Moon, Users, Target } from 'lucide-react';

const badgeCategories = [
  {
    title: 'STREAKS',
    icon: Flame,
    color: '#EF4444',
    badges: [
      { id: 'st1', label: '3-Day Streak', locked: true },
      { id: 'st2', label: '7-Day Streak', locked: true },
      { id: 'st3', label: '14-Day Streak', locked: true },
      { id: 'st4', label: '30-Day Streak', locked: true },
      { id: 'st5', label: '50-Day Streak', locked: true },
      { id: 'st6', label: '75-Day Streak', locked: true },
      { id: 'st7', label: '100-Day Streak', locked: true },
      { id: 'st8', label: '150-Day Streak', locked: true },
      { id: 'st9', label: '200-Day Streak', locked: true },
      { id: 'st10', label: '365-Day Streak', locked: true },
    ]
  },
  {
    title: 'LEARNING',
    icon: BookOpen,
    color: '#3B82F6',
    badges: [
      { id: 'l1', label: 'First Lesson', locked: true },
      { id: 'l2', label: 'Module Master', locked: true },
      { id: 'l3', label: 'Curriculum Finisher', locked: true },
      { id: 'l4', label: 'Knowledge Seeker', locked: true },
      { id: 'l5', label: 'Avid Reader', locked: true },
      { id: 'l6', label: 'Concept Crusher', locked: true },
      { id: 'l7', label: 'Theory Expert', locked: true },
      { id: 'l8', label: 'Practical Pro', locked: true },
      { id: 'l9', label: 'Finance Guru', locked: true },
      { id: 'l10', label: 'PiggyPath Scholar', locked: true },
    ]
  },
  {
    title: 'SAVING',
    icon: PiggyBank,
    color: '#00E599',
    badges: [
      { id: 'sa1', label: 'First ₹500', locked: true },
      { id: 'sa2', label: 'Saver Pro (₹5K)', locked: true },
      { id: 'sa3', label: 'Growing (₹10K)', locked: true },
      { id: 'sa4', label: 'Nest Egg (₹20K)', locked: true },
      { id: 'sa5', label: 'Safety Net (₹30K)', locked: true },
      { id: 'sa6', label: 'Big Goals (₹50K)', locked: true },
      { id: 'sa7', label: 'Wealth Builder (₹100K)', locked: true },
      { id: 'sa8', label: 'Half Mil (₹500K)', locked: true },
      { id: 'sa9', label: 'Millionaire (₹1M)', locked: true },
      { id: 'sa10', label: 'Financial Freedom', locked: true },
    ]
  },
  {
    title: 'CONSISTENCY',
    icon: Sun, 
    color: '#FFC107',
    badges: [
      { id: 'c1', label: 'Early Bird', locked: true, specificIcon: Sun },
      { id: 'c2', label: 'Night Owl', locked: true, specificIcon: Moon },
      { id: 'c3', label: 'Weekend Warrior', locked: true },
      { id: 'c4', label: 'Daily Grind', locked: true },
      { id: 'c5', label: 'Non-Stop', locked: true },
      { id: 'c6', label: 'Dedicated', locked: true },
      { id: 'c7', label: 'Relentless', locked: true },
      { id: 'c8', label: 'Routine Master', locked: true },
      { id: 'c9', label: 'Habit Former', locked: true },
      { id: 'c10', label: 'Unbreakable', locked: true },
    ]
  },
  {
    title: 'SOCIAL',
    icon: Users,
    color: '#8B5CF6',
    badges: [
      { id: 'so1', label: 'First Friend', locked: true },
      { id: 'so2', label: 'Friendly (3)', locked: true },
      { id: 'so3', label: 'Social (5)', locked: true },
      { id: 'so4', label: 'Butterfly (10)', locked: true },
      { id: 'so5', label: 'Connector (20)', locked: true },
      { id: 'so6', label: 'Networker (50)', locked: true },
      { id: 'so7', label: 'Influencer (100)', locked: true },
      { id: 'so8', label: 'Trendsetter', locked: true },
      { id: 'so9', label: 'Community Lead', locked: true },
      { id: 'so10', label: 'PiggyPath Mayor', locked: true },
    ]
  },
  {
    title: 'QUIZZES',
    icon: Target,
    color: '#F97316',
    badges: [
      { id: 'q1', label: 'Perfect Score', locked: true },
      { id: 'q2', label: 'Sharp Mind', locked: true },
      { id: 'q3', label: 'Quiz Pro (5)', locked: true },
      { id: 'q4', label: 'Quiz Master (10)', locked: true },
      { id: 'q5', label: 'Trivia King (20)', locked: true },
      { id: 'q6', label: 'Flawless (50)', locked: true },
      { id: 'q7', label: 'Genius (100)', locked: true },
      { id: 'q8', label: 'Speed Demon', locked: true },
      { id: 'q9', label: 'Accuracy God', locked: true },
      { id: 'q10', label: 'Unstoppable', locked: true },
    ]
  }
];

const BadgesAndCollections = () => {
  return (
    <div className="w-full bg-white dark:bg-[#18181B] border-[3px] border-[#18181B] dark:border-white shadow-[8px_8px_0_#18181B] dark:shadow-[8px_8px_0_#F4F4F5] p-8 mb-6 transition-colors">
      
      <h3 className="font-black text-xl tracking-tight text-[#18181B] dark:text-[#F4F4F5] uppercase mb-8">
        Badges & Collections
      </h3>

      <div className="flex flex-col gap-8">
        {badgeCategories.map((category, idx) => {
          const CategoryIcon = category.icon;
          
          return (
            <div key={idx}>
              <div className="flex items-center gap-2 mb-4">
                <CategoryIcon size={16} color={category.color} strokeWidth={3} />
                <h4 className="font-['Space_Mono',monospace] font-bold text-xs text-[#18181B] dark:text-[#F4F4F5] uppercase">
                  {category.title}
                </h4>
              </div>
              
              <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
                {category.badges.map(badge => {
                  const Icon = badge.specificIcon || category.icon;
                  
                  return (
                    <div key={badge.id} className="flex flex-col items-center shrink-0 w-16 relative">
                      
                      {/* Badge Box */}
                      <div 
                        className={`
                          w-16 h-16 border-[3px] flex items-center justify-center mb-2 transition-colors relative
                          ${badge.locked ? 'bg-[#F4F4F5] dark:bg-[#27272A] border-gray-300 dark:border-gray-600 shadow-none' : 'border-[#18181B] dark:border-white shadow-[2px_2px_0_#18181B] dark:shadow-[2px_2px_0_#F4F4F5]'}
                        `}
                        style={{ backgroundColor: badge.locked ? undefined : category.color }}
                      >
                        {/* Illustration */}
                        <Icon 
                          size={28} 
                          color={badge.locked ? "#A1A1AA" : "#18181B"} 
                          strokeWidth={badge.locked ? 2 : 2.5} 
                        />

                        {/* Lock Overlay */}
                        {badge.locked && (
                          <div className="absolute -bottom-1 -right-1 bg-white dark:bg-[#18181B] rounded-full p-0.5 border-[2px] border-gray-300 dark:border-gray-600">
                            <Lock size={12} color="#A1A1AA" strokeWidth={3} />
                          </div>
                        )}
                      </div>

                      {/* Label */}
                      <span className="font-['Space_Mono',monospace] text-[9px] font-bold text-[#18181B] dark:text-[#A1A1AA] text-center w-full leading-tight">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default BadgesAndCollections;
