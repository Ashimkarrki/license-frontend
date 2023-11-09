import QuestionTrack from "../Components/Testpage/QuestionTrack";
import Questions from "../Components/Testpage/Questions";
import Timer from "../Components/Testpage/Timer";
import { useState } from "react";
interface questionType {
  q: string;
  options: {
    id: string;
    option: string;
  }[];
  id: string;
}
const Test: React.FunctionComponent = () => {
  const [answered, setAnswered] = useState<string[]>([]);
  const [question] = useState<questionType[]>([
    {
      q: "What is the largest planet in our solar system?",
      id: "1",
      options: [
        { id: "1", option: "Jupiter" },
        { id: "2", option: "Mars" },
        { id: "3", option: "Earth" },
        { id: "4", option: "Saturn" },
      ],
    },
    {
      q: "Which gas do plants absorb from the atmosphere?",
      id: "2",
      options: [
        { id: "1", option: "Oxygen" },
        { id: "2", option: "Carbon Dioxide" },
        { id: "3", option: "Nitrogen" },
        { id: "4", option: "Hydrogen" },
      ],
    },
    {
      q: "Who painted the Mona Lisa?",
      id: "3",
      options: [
        { id: "1", option: "Leonardo da Vinci" },
        { id: "2", option: "Pablo Picasso" },
        { id: "3", option: "Vincent van Gogh" },
        { id: "4", option: "Michelangelo" },
      ],
    },
    {
      q: "What is the largest mammal on Earth?",
      id: "4",
      options: [
        { id: "1", option: "African Elephant" },
        { id: "2", option: "Blue Whale" },
        { id: "3", option: "Giraffe" },
        { id: "4", option: "Hippopotamus" },
      ],
    },
    {
      q: "Which gas is responsible for the greenhouse effect on Earth?",
      id: "5",
      options: [
        { id: "1", option: "Oxygen" },
        { id: "2", option: "Carbon Dioxide" },
        { id: "3", option: "Methane" },
        { id: "4", option: "Nitrogen" },
      ],
    },
    {
      q: "Who wrote 'Romeo and Juliet'?",
      id: "6",
      options: [
        { id: "1", option: "William Shakespeare" },
        { id: "2", option: "Charles Dickens" },
        { id: "3", option: "Jane Austen" },
        { id: "4", option: "Mark Twain" },
      ],
    },
    {
      q: "What is the smallest prime number?",
      id: "7",
      options: [
        { id: "1", option: "0" },
        { id: "2", option: "1" },
        { id: "3", option: "2" },
        { id: "4", option: "3" },
      ],
    },
    {
      q: "Which gas is essential for respiration?",
      id: "8",
      options: [
        { id: "1", option: "Carbon Dioxide" },
        { id: "2", option: "Oxygen" },
        { id: "3", option: "Methane" },
        { id: "4", option: "Nitrogen" },
      ],
    },
    {
      q: "What is the chemical symbol for gold?",
      id: "9",
      options: [
        { id: "1", option: "Au" },
        { id: "2", option: "Ag" },
        { id: "3", option: "Fe" },
        { id: "4", option: "Cu" },
      ],
    },
    {
      q: "Which planet is known as the Red Planet?",
      id: "10",
      options: [
        { id: "1", option: "Mars" },
        { id: "2", option: "Venus" },
        { id: "3", option: "Jupiter" },
        { id: "4", option: "Mercury" },
      ],
    },
    {
      q: "What is the largest ocean on Earth?",
      id: "11",
      options: [
        { id: "1", option: "Atlantic Ocean" },
        { id: "2", option: "Indian Ocean" },
        { id: "3", option: "Arctic Ocean" },
        { id: "4", option: "Pacific Ocean" },
      ],
    },
    {
      q: "What is the chemical symbol for water?",
      id: "12",
      options: [
        { id: "1", option: "Wa" },
        { id: "2", option: "O2" },
        { id: "3", option: "H2O" },
        { id: "4", option: "Wt" },
      ],
    },
    {
      q: "Who is known as the 'Father of Modern Physics'?",
      id: "13",
      options: [
        { id: "1", option: "Isaac Newton" },
        { id: "2", option: "Albert Einstein" },
        { id: "3", option: "Galileo Galilei" },
        { id: "4", option: "Stephen Hawking" },
      ],
    },
    {
      q: "What is the main function of the heart in the human body?",
      id: "14",
      options: [
        { id: "1", option: "Pumping blood" },
        { id: "2", option: "Digesting food" },
        { id: "3", option: "Filtering water" },
        { id: "4", option: "Producing oxygen" },
      ],
    },
    {
      q: "Which gas is commonly used in balloons to make them float?",
      id: "15",
      options: [
        { id: "1", option: "Oxygen" },
        { id: "2", option: "Hydrogen" },
        { id: "3", option: "Carbon Dioxide" },
        { id: "4", option: "Nitrogen" },
      ],
    },
    {
      q: "Who is the author of 'The Great Gatsby'?",
      id: "16",
      options: [
        { id: "1", option: "F. Scott Fitzgerald" },
        { id: "2", option: "Ernest Hemingway" },
        { id: "3", option: "Mark Twain" },
        { id: "4", option: "Charles Dickens" },
      ],
    },
    {
      q: "What is the freezing point of water in Fahrenheit?",
      id: "17",
      options: [
        { id: "1", option: "32°F" },
        { id: "2", option: "0°F" },
        { id: "3", option: "100°F" },
        { id: "4", option: "212°F" },
      ],
    },
    {
      q: "Which planet is known as the 'Morning Star' and 'Evening Star'?",
      id: "18",
      options: [
        { id: "1", option: "Mars" },
        { id: "2", option: "Venus" },
        { id: "3", option: "Jupiter" },
        { id: "4", option: "Mercury" },
      ],
    },
    {
      q: "What is the chemical symbol for sodium?",
      id: "19",
      options: [
        { id: "1", option: "Na" },
        { id: "2", option: "So" },
        { id: "3", option: "Sd" },
        { id: "4", option: "No" },
      ],
    },
    {
      q: "Who is the first woman to fly solo across the Atlantic Ocean?",
      id: "20",
      options: [
        { id: "1", option: "Amelia Earhart" },
        { id: "2", option: "Bessie Coleman" },
        { id: "3", option: "Sally Ride" },
        { id: "4", option: "Valentina Tereshkova" },
      ],
    },
    {
      q: "What is the chemical symbol for oxygen?",
      id: "21",
      options: [
        { id: "1", option: "O" },
        { id: "2", option: "O2" },
        { id: "3", option: "Ox" },
        { id: "4", option: "Og" },
      ],
    },
    {
      q: "Which planet is known as the 'Red Planet'?",
      id: "22",
      options: [
        { id: "1", option: "Mars" },
        { id: "2", option: "Venus" },
        { id: "3", option: "Jupiter" },
        { id: "4", option: "Mercury" },
      ],
    },
    {
      q: "Who is the author of 'To Kill a Mockingbird'?",
      id: "23",
      options: [
        { id: "1", option: "J.K. Rowling" },
        { id: "2", option: "George Orwell" },
        { id: "3", option: "Harper Lee" },
        { id: "4", option: "F. Scott Fitzgerald" },
      ],
    },
    {
      q: "What is the chemical symbol for carbon?",
      id: "24",
      options: [
        { id: "1", option: "C" },
        { id: "2", option: "Ca" },
        { id: "3", option: "Co" },
        { id: "4", option: "Cr" },
      ],
    },
    {
      q: "What is the boiling point of water in Celsius?",
      id: "25",
      options: [
        { id: "1", option: "100°C" },
        { id: "2", option: "0°C" },
        { id: "3", option: "32°C" },
        { id: "4", option: "212°C" },
      ],
    },
    {
      q: "What is the chemical symbol for helium?",
      id: "26",
      options: [
        { id: "1", option: "He" },
        { id: "2", option: "Hl" },
        { id: "3", option: "Hy" },
        { id: "4", option: "Hi" },
      ],
    },
    {
      q: "Who is the author of 'Pride and Prejudice'?",
      id: "27",
      options: [
        { id: "1", option: "Emily Bronte" },
        { id: "2", option: "Charlotte Bronte" },
        { id: "3", option: "Jane Austen" },
        { id: "4", option: "George Orwell" },
      ],
    },
    {
      q: "What is the chemical symbol for silver?",
      id: "28",
      options: [
        { id: "1", option: "Si" },
        { id: "2", option: "Ag" },
        { id: "3", option: "Sl" },
        { id: "4", option: "Sr" },
      ],
    },
    {
      q: "Who is known as the 'Father of the Computer'?",
      id: "29",
      options: [
        { id: "1", option: "Alan Turing" },
        { id: "2", option: "Steve Jobs" },
        { id: "3", option: "Bill Gates" },
        { id: "4", option: "Mark Zuckerberg" },
      ],
    },
    {
      q: "What is the chemical symbol for iron?",
      id: "30",
      options: [
        { id: "1", option: "Ir" },
        { id: "2", option: "Io" },
        { id: "3", option: "In" },
        { id: "4", option: "Fe" },
      ],
    },
  ]);

  return (
    <main className="grid  items-start text-center grid-cols-4	gap-y-10 gap-x-6 mx-4 ">
      <p className="col-span-full	">Past Question BCT 080</p>
      <Timer />
      <Questions
        question={question}
        answered={answered}
        setAnswered={setAnswered}
      />
      <QuestionTrack question={question} answered={answered} />
    </main>
  );
};

export default Test;
