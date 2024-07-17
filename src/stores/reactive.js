import { reactive } from "vue";

function generatedRandomIds() {
  const badNumbers = [186, 190];
  const numbers = Array.from({ length: 350 }, (_, i) => i + 1).filter(
    (i) => !badNumbers.includes(i)
  );

  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }

  return numbers;
}

const ids = generatedRandomIds();
const mappedNumbers = ids.reduce((acc, cur) => {
  acc[cur] = true;
  return acc;
}, {});
const initialSize = 20;
const batchSize = 20;

export const store = reactive({
  pictureIds: ids.slice(0, initialSize),
  findPrevious(i) {
    do {
      i--;
    } while (!mappedNumbers[i]);
    return i;
  },
  findNext(i) {
    do {
      i++;
    } while (!mappedNumbers[i]);
    return i;
  },
  increasePictures() {
    this.pictureIds = this.pictureIds.concat(
      ids.slice(this.pictureIds.length, this.pictureIds.length + batchSize)
    );
  },
});
