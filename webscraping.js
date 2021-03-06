const puppeteer = require('puppeteer');
const pageURL = 'https://www.bodybuilding.com/exercises/finder';

const webscraping = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  let dataObj = {};

  try {
  } catch (error) {}
  await page.goto(pageURL);

  const loadButton = '.ExLoadMore-btn';
  for (let i = 0; i < 40; i++) {
    await page.click(loadButton);
    await page.waitForTimeout(1500);
  }

  const exercises = await page.$$('.ExResult-row');
  const exerciseList = [];
  for (let exercise of exercises) {
    const name = await exercise
      .$eval('.ExHeading a', (el) => el.textContent.replace(/\s+/g, ' ').trim())
      .catch((err) => console.error('no name'));

    const targetMuscle = await exercise
      .$eval('.ExResult-muscleTargeted a', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no target muscle'));

    const equipment = await exercise
      .$eval('.ExResult-equipmentType a', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no equipment'));

    const average = await exercise
      .$eval('.ExRating-badge', (el) =>
        el.textContent.replace(/\s+/g, ' ').trim()
      )
      .catch((err) => console.error('no average'));

    const imageURL = await exercise
      .$eval('.ExResult-img', (el) => el.getAttribute('src'))
      .catch((err) => console.error('no imageURL'));

    if (name && targetMuscle && equipment && average && imageURL) {
      exerciseList.push({
        name,
        targetMuscle,
        equipment,
        average,
        imageURL,
      });
    }
    dataObj = {
      amount: exerciseList.length,
      exerciseList,
    };
  }

  await browser.close();
  return dataObj;
};

module.exports = webscraping;
