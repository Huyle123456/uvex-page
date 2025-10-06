"use client";

import { Button } from "@/components/button";
import { Progress } from "@/components/progress";
import {
  getMatchingProducts,
  type QuestionnaireAnswers,
} from "@/data/product-answers";
import { getQuestionsByPPEType } from "@/data/questions";
import { ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { ResultsList } from "./results-list";

interface Answers {
  [key: number]: string | string[];
}

export const QuestionList = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);

  // Get questions based on Q1 answer (PPE type)
  const questionnaireData = useMemo(() => {
    const ppeType = answers[1] as string;
    return getQuestionsByPPEType(ppeType || "helmets");
  }, [answers]);

  const currentQuestion = questionnaireData[currentQuestionIndex];
  const progress =
    ((currentQuestionIndex + 1) / questionnaireData.length) * 100;

  const handleSingleChoice = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  const handleMultipleChoice = (value: string) => {
    const currentAnswers = (answers[currentQuestion.id] as string[]) || [];
    const newAnswers = currentAnswers.includes(value)
      ? currentAnswers.filter((v) => v !== value)
      : [...currentAnswers, value];
    setAnswers({ ...answers, [currentQuestion.id]: newAnswers });
  };

  const handleContinue = () => {
    // If moving from Q1, reset subsequent answers
    if (currentQuestionIndex === 0) {
      const q1Answer = answers[1];
      setAnswers({ 1: q1Answer });
    }

    if (currentQuestionIndex < questionnaireData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Show results
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
  };

  const isAnswered = () => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "single") {
      return !!answer;
    } else {
      return Array.isArray(answer) && answer.length > 0;
    }
  };

  const isSelected = (value: string) => {
    const answer = answers[currentQuestion.id];
    if (currentQuestion.type === "single") {
      return answer === value;
    } else {
      return Array.isArray(answer) && answer.includes(value);
    }
  };

  // If showing results, get matching products
  if (showResults) {
    const formattedAnswers: QuestionnaireAnswers = {
      q1: answers[1] as string,
      q2: (answers[2] as string[]) || [],
      q3: (answers[3] as string[]) || [],
      q4: answers[4] as string,
    };
    const matchingProducts = getMatchingProducts(formattedAnswers);

    return (
      <ResultsList products={matchingProducts} onRestart={handleRestart} />
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto space-y-8">
      <Progress
        value={progress}
        backgroundColor="#434721"
        indicatorColor="#C7D562"
      />

      <div className=" backdrop-blur-sm rounded-2xl p-8 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-medium text-white">
            {currentQuestion.question}
          </h2>
          <p className="text-neutral-400 text-sm">
            {currentQuestion.type === "single"
              ? "Please select an answer"
              : "Please select all that apply"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.value}
              onClick={() =>
                currentQuestion.type === "single"
                  ? handleSingleChoice(option.value)
                  : handleMultipleChoice(option.value)
              }
              className={`
                group relative flex items-center gap-3 px-4 py-3.5 rounded-lg
                border-2 transition-all duration-200 text-left
                ${
                  isSelected(option.value)
                    ? "border-[#C7D562] bg-[#C7D562]/10"
                    : "border-neutral-700 hover:border-neutral-600 "
                }
              `}
            >
              <span
                className={`
                text-sm font-medium transition-colors
                ${
                  isSelected(option.value)
                    ? "text-white"
                    : "text-neutral-300 group-hover:text-white"
                }
              `}
              >
                {option.label}
              </span>
            </button>
          ))}
        </div>

        <div className="flex justify-end pt-4">
          <Button
            onClick={handleContinue}
            disabled={!isAnswered()}
            className="disabled:opacity-40"
          >
            Continue
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
