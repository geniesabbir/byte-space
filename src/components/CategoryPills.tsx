"use client";

interface CategoryPillsProps {
  categories: string[];
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
    <div
      className={`flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 ${className}`}
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
              isSelected
                ? "bg-[#CBFC01] text-[#161718] font-semibold shadow-sm"
                : "bg-white border border-[#DAE0E5] text-[#585A62] hover:border-[#003BE2] hover:text-[#003BE2]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
