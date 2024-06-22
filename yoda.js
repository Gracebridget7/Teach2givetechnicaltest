const yodaSpeak = (sentence) => {
    const words = sentence.split(' ');

    const reversedWords = words.reverse();

    const yodaSentence = reversedWords.join(' ');

    return yodaSentence;
}

const sentence = "I am home";
const yodaSentence = yodaSpeak(sentence);
console.log(yodaSentence);
