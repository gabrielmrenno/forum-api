import { describe, expect, it } from "vitest";
import { AnswerQuestionUseCaseByInstructor } from "./answer-question-by-instructor";
import { AnswersRepository } from "../repositories/answers-repository";
import { Answer } from "../entities/answer";

const fakeAnswerRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  }
}

describe("AnswerQuestion", () => {
  it("should return the correct answer", async () => {
    const answerQuestionByInstructor = new AnswerQuestionUseCaseByInstructor(fakeAnswerRepository);
    const answer = await answerQuestionByInstructor.execute({
      instructorId: "instructor-id",
      questionId: "question-id",
      content: "content",
    });
    expect(answer.content).toBe("content");
  });
});
