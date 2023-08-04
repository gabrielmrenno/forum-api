import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseByInstructorRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCaseByInstructor {
  constructor(private answersRepository: AnswersRepository) { }
  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseByInstructorRequest) {
    const answer = new Answer({ content, authorId: instructorId, questionId });
    await this.answersRepository.create(answer);
    return answer;
  }
}
