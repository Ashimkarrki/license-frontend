interface PropType {
  question: {
    q: string;
    options: {
      id: string;
      option: string;
    }[];
    id: string;
  }[];
  answered: string[];
}
const QuestionTrack: React.FunctionComponent<PropType> = ({
  question,
  answered,
}) => {
  return (
    <div className="sticky top-2 mr-4  flex gap-2 border-2 justify-center flex-row rounded-xl p-2 flex-wrap">
      {question.map((s, index) => {
        return answered.includes(s.id) ? (
          <a
            href={"#" + s.id}
            className="bg-green-400 w-10 py-1 rounded-lg"
            key={s.id}
          >
            {index + 1}
          </a>
        ) : (
          <a
            href={"#" + s.id}
            className="bg-slate-300 w-10 py-1 rounded-lg"
            key={s.id}
          >
            {index + 1}
          </a>
        );
      })}
    </div>
  );
};

export default QuestionTrack;
