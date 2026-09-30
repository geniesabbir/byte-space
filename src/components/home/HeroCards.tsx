import AvatarStack from "@/components/ui/AvatarStack";

interface CardProps {
  className?: string;
}

/**
 * UI/UX Design floating card component
 * Matches Figma 208px width, 18px rounded corners, Satoshi/Poppins typography
 */
export function UIUXCard({ className = "" }: CardProps) {
  return (
    <div
      className={`w-[208px] bg-white rounded-[18px] px-5 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#F0F1F3]/80 text-left transition-transform duration-300 hover:-translate-y-1 select-none ${className}`}
    >
      <h3 className="font-poppins font-semibold text-[15px] sm:text-[16px] leading-[120%] text-[#161718] tracking-[-0.01em]">
        UI/UX Design
      </h3>
      <p className="mt-1 font-satoshi font-normal text-[11px] sm:text-[12px] leading-[140%] text-[#82868E] flex items-center gap-1.5 whitespace-nowrap">
        <span>200 Courses</span>
        <span className="inline-block w-1 h-1 rounded-full bg-[#82868E]" />
        <span>1000+ Students</span>
      </p>
    </div>
  );
}

/**
 * Learning Progress floating card component with real 55% progress bar
 * Matches Figma 232px width, 22px rounded corners, 55% progress fill
 */
export function LearningProgressCard({ className = "" }: CardProps) {
  return (
    <div
      className={`w-[232px] bg-white rounded-[22px] px-5 pt-4 pb-5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#F0F1F3]/80 text-left transition-transform duration-300 hover:-translate-y-1 select-none ${className}`}
    >
      <p className="font-satoshi font-medium text-[13px] sm:text-[14px] leading-[120%] text-[#242528]">
        Learning Progress
      </p>
      <div className="mt-1 mb-3 font-poppins font-bold text-[36px] sm:text-[38px] leading-none text-[#242528] tracking-[-0.02em]">
        55%
      </div>
      <div className="w-full h-2 rounded-full bg-[#F5F5F7] overflow-hidden">
        <div
          className="h-full bg-[#D4FB20] rounded-full transition-all duration-700 ease-out"
          style={{ width: "55%" }}
        />
      </div>
    </div>
  );
}

/**
 * Happy Students floating card component with rating and reusable AvatarStack
 * Matches Figma 258px width, 22px rounded corners
 */
export function HappyStudentsCard({ className = "" }: CardProps) {
  return (
    <div
      className={`w-[258px] bg-white rounded-[22px] p-4 shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-[#F0F1F3]/80 text-left transition-transform duration-300 hover:-translate-y-1 select-none ${className}`}
    >
      <h4 className="font-satoshi font-semibold text-[14px] sm:text-[15px] leading-[120%] text-[#242528]">
        Happy Students
      </h4>
      <div className="mt-1 mb-2.5 flex items-center gap-1 font-satoshi text-[12px] sm:text-[13px] leading-none text-[#242528]">
        <span className="font-semibold text-[#161718]">4.5</span>
        <span className="text-[#82868E] font-normal">(240)</span>
        <svg
          className="w-3.5 h-3.5 text-[#D4FB20] fill-[#D4FB20] ml-0.5"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </div>

      {/* Reusable AvatarStack Component */}
      <div className="w-full flex justify-center mt-1">
        <AvatarStack
          avatars={[
            "/assets/avatars/avatar-1.jpg",
            "/assets/avatars/avatar-2.jpg",
            "/assets/avatars/avatar-3.jpg",
            "/assets/avatars/avatar-4.jpg",
            "/assets/avatars/avatar-5.jpg",
            "/assets/avatars/avatar-6.jpg",
            "/assets/avatars/avatar-7.jpg",
          ]}
          badge="2K+"
          size="md"
        />
      </div>
    </div>
  );
}
