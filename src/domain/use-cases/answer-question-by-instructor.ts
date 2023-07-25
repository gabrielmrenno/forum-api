import { Answer } from "../entities/answer";

interface AnswerQuestionUseCaseByInstructorRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCaseByInstructor {
  execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseByInstructorRequest) {
    const answer = new Answer({ content, authorId: instructorId, questionId });

    return answer;
  }
}
