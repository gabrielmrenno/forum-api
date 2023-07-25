import { describe, expect, it } from "vitest";
import { AnswerQuestionUseCaseByInstructor } from "./answer-question-by-instructor";

describe("AnswerQuestion", () => {
  it("should return the correct answer", () => {
    const answerQuestionByInstructor = new AnswerQuestionUseCaseByInstructor();
    const answer = answerQuestionByInstructor.execute({
      instructorId: "instructor-id",
      questionId: "question-id",
      content: "content",
    });
    expect(answer.content).toBe("content");
  });
});
