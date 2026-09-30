"use client";

import { categoryRows } from "@/data/courses";

interface CategoryPillsProps {
  categories?: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  className?: string;
}

export default function CategoryPills({
  categories,
  selectedCategory,
  onSelectCategory,
  className = "",
}: CategoryPillsProps) {
  return (
    <div className={`flex flex-col items-center gap-4 w-full max-w-[1086px] mx-auto ${className}`}>
      {categoryRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {row.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={`h-[43px] px-4 py-3 rounded-full font-satoshi font-medium text-[16px] leading-[120%] tracking-[0%] whitespace-nowrap transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                  isSelected
                    ? "bg-[#D4FB20] text-[#242528]"
                    : "bg-[#F5F5F6] text-[#242528] hover:bg-[#EAEBEF]"
                }`}
              >
                {category}
              </button>
            );
          })}

          {/* "+ More" button on the 3rd row */}
          {rowIndex === categoryRows.length - 1 && (
            <button
              onClick={() => onSelectCategory("UI/UX Design")}
              className="h-[43px] px-4 py-3 font-satoshi font-medium text-[16px] leading-[120%] text-[#003BE2] hover:underline transition-all cursor-pointer flex items-center justify-center whitespace-nowrap"
            >
              + More
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

