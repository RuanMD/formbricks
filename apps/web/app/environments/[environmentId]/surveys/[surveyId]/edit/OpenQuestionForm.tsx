import type { OpenTextQuestion } from "@formbricks/types/questions";
import { Survey } from "@formbricks/types/surveys";
import { Input, Label } from "@formbricks/ui";

interface OpenQuestionFormProps {
  localSurvey: Survey;
  question: OpenTextQuestion;
  questionIdx: number;
  updateQuestion: (questionIdx: number, updatedAttributes: any) => void;
  lastQuestion: boolean;
}

export default function OpenQuestionForm({
  question,
  questionIdx,
  updateQuestion,
  lastQuestion,
}: OpenQuestionFormProps): JSX.Element {
  return (
    <form>
      <div className="mt-3">
        <Label htmlFor="headline">Question</Label>
        <div className="mt-2">
          <Input
            autoFocus
            id="headline"
            name="headline"
            value={question.headline}
            onChange={(e) => updateQuestion(questionIdx, { headline: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-3">
        <Label htmlFor="subheader">Description</Label>
        <div className="mt-2">
          <Input
            id="subheader"
            name="subheader"
            value={question.subheader}
            onChange={(e) => updateQuestion(questionIdx, { subheader: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-3">
        <Label htmlFor="placeholder">Placeholder</Label>
        <div className="mt-2">
          <Input
            id="placeholder"
            name="placeholder"
            value={question.placeholder}
            onChange={(e) => updateQuestion(questionIdx, { placeholder: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-3">
        <Label htmlFor="buttonLabel">Button Label</Label>
        <div className="mt-2">
          <Input
            id="buttonLabel"
            name="buttonLabel"
            value={question.buttonLabel}
            placeholder={lastQuestion ? "Finish" : "Next"}
            onChange={(e) => updateQuestion(questionIdx, { buttonLabel: e.target.value })}
          />
        </div>
      </div>
    </form>
  );
}
