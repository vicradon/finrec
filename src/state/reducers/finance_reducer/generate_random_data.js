import dataPoint from './datapoint'

const generateRandomData = (length) => {
  const data = []
  const categories = ["food", "transport", "housing", "education", "clothing"]
  const paymentModes = ['credit card', 'debit card', 'cash']
  const descriptions = ["bought this and that", "sold this for that", "reported a blind man", "met a thief"]
  const cashFlows = ['income', 'expense']

  const randomDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
  const getRandomDate = () => {
    return randomDate(new Date(2019, 8, 1), new Date()).toLocaleString().split(',')[0]
  }
  const getRandomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
  }
  const getRandomAmount = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  for (let i = 0; i < length; i++) {
    const aDataPoint = new dataPoint({
      category: categories[getRandomIndex(categories)],
      date: getRandomDate(),
      paymentMode: paymentModes[getRandomIndex(paymentModes)],
      description: descriptions[getRandomIndex(descriptions)],
      amount: getRandomAmount(200, 5000),
      isChecked: false,
      cashFlow: cashFlows[getRandomIndex(cashFlows)]
    })
    data.push(aDataPoint)
  }
  return data.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    return -1
  })
}
export default generateRandomData