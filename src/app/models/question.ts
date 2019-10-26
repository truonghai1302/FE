import {Topic} from './topic';
import {QuestionType} from './questiontype';
import {LevelofDifficult} from './levelofdifficult';

export class Question {
   questionid: number;
   questioncontent: string;
   countquestion: number;
   topic: Topic;
   questiontype: QuestionType;
   levelofdifficult: LevelofDifficult;
}
