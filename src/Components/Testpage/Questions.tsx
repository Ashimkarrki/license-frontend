// import { useState } from "react";
interface propType {
  question: {
    q: string;
    options: {
      id: string;
      option: string;
    }[];
    id: string;
  }[];
  answered: string[];
  setAnswered: React.Dispatch<React.SetStateAction<string[]>>;
}

const Questions: React.FunctionComponent<propType> = ({
  question,
  answered,
  setAnswered,
}) => {
  const chooseHandeler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const x: string = e.target.value;
    if (!answered.includes(x)) {
      setAnswered([...answered, x]);
    }
  };
  return (
    <ol className="col-start-2 col-span-2 text-left border-2 rounded-xl p-2 pl-8 list-decimal">
      {question.map((s) => {
        return (
          <li id={s.id} key={s.id}>
            {s.q}
            <div className="flex flex-col my-2 pl-6 ">
              {s.options.map((q) => {
                return (
                  <label
                    htmlFor={"x" + s.id + q.id}
                    key={q.id}
                    className="cursor-pointer"
                  >
                    <input
                      type="radio"
                      className="mr-2"
                      onInput={chooseHandeler}
                      value={s.id}
                      name={s.id}
                      id={"x" + s.id + q.id}
                    />
                    {q.option}
                  </label>
                );
              })}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default Questions;
