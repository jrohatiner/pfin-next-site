import Link from "next/link";
import { getAllLessons } from "@/lib/content-registry";

export default function LessonsPage() {
  const lessons = getAllLessons();

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Lessons</h1>
      {lessons.length === 0 ? (
        <p>No lessons found.</p>
      ) : (
        <ul>
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link href={`/lessons/${lesson.slug}`}>{lesson.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
