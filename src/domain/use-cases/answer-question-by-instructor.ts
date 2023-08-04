import { UniqueEntityId } from "../../core/entities/unique-entity-id";
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
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId)
    });
    await this.answersRepository.create(answer);
    return answer;
  }
}
