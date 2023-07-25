import { describe, expect, it } from "vitest";
import { AnswerQuestionUseCase } from "./answer-question";

describe("AnswerQuestion", () => {
  it("should return the correct answer", () => {
    const answerQuestion = new AnswerQuestionUseCase();
    const answer = answerQuestion.execute({
      instructorId: "instructor-id",
      questionId: "question-id",
      content: "content",
    });
    expect(answer.content).toBe("content");
  });
});
