import CourseDetailView from "../CourseDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function CourseReviewsPage({ params }: PageProps) {
  const { id } = await params;
  return <CourseDetailView initialCourseId={id} initialTab="reviews" />;
}
