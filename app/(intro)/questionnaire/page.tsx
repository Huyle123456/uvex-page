import SectionPage from "@/components/section-page";
import { QuestionList } from "./_components/question-list";

export default function QuestionnairePage() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <SectionPage>
        <QuestionList />
      </SectionPage>
    </div>
  );
}
