// @ts-check
class dataPoint {
  constructor(options) {
    const { category, date, paymentMode, description, amount, isChecked, cashFlow } = options
    this.category = category
    this.date = date
    this.paymentMode = paymentMode
    this.description = description
    this.amount = amount
    this.isChecked = isChecked
    this.cashFlow = cashFlow
  }
  toggleCheck = () => {
    this.isChecked = !this.isChecked
  }
  check = (value) => {
    this.isChecked = value
  }
  setAmount = (value) => {
    this.amount = value
  }
  setDate = (value) => {
    this.date = value
  }
  setDescription = (value) => {
    this.description = value
  }
  setCategory = (value) => {
    this.category = value
  }
  setPaymentMode = (value) => {
    this.paymentMode = value
  }
}

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
// export default generateRandomData

class randomData {
  constructor(filters) {
    const { length, dateRange, categories, cashFlow, paymentMode, amount } = filters
    this._data = generateRandomData(length);
    this._filteredData = this._data
    this._dateRange = dateRange
    this._categories = categories
    this._cashFlow = cashFlow
    this._paymentMode = paymentMode
    this._amount = amount
    this._tens = []
  }
  dateFilter = () => {
    if (this._dateRange) {
      const _minDate = new Date(this._dateRange.min)
      const _maxDate = new Date(this._dateRange.max)

      this._filteredData = this._filteredData.filter((x) => {
        const theDate = new Date(x.date)
        if (theDate >= _minDate && theDate < _maxDate) {
          return x
        }
        return false
      })
    }
  }
  categoriesFilter = () => {
    if (this._categories.length > 0) {
      this._filteredData = this._filteredData.filter((x) => {
        if (this._categories.includes(x.category)) {
          return x
        }
        return false
      })
    }
    return this._filteredData
  }

  cashFlowFilter = () => {
    if (this._cashFlow.length > 0) {
      this._filteredData = this._filteredData.filter((x) => {
        if (this._cashFlow.includes(x.cashFlow)) {
          return x
        }
        return false
      })
    }
    return this._filteredData

  }
  paymentModeFilter = () => {

  }
  amountFilter = () => {

  }
  descriptionFilter = () => {

  }
  breakIntoTens = () => {
    // this.dateFilter()
    // this.categoriesFilter()
    this.cashFlowFilter()
    this.paymentModeFilter()
    this.amountFilter()
    this.descriptionFilter()

    for (let i = 0; i < this._data.length; i += 10) {
      this._tens.push(this._filteredData.slice(i, i + 10))
    }
  }
  get tens() { return this._tens }

  /**
   * Structure
   * We have one big data object gotten from an API or localStorage
   * This data would be sorted right from start
   * Anytime a filter is clicked we generate data based on that filter and return it
   * We always displlay filtered data
   * This data would be available at the top component level so that any component can access it as it wishes
   * The Table component would highly depend on filters
   * Other components would depend on user defined filters
   * 
   * Filters
   * 
   * Default: no-filter
   * 
   * Return tens of the filtered data
   * 
   * 
   * Sorting
   * 
   * sort based on cash from max to min
   */


}
// Ideally: dashboardData = new DataObject()

const someRandomData = new randomData({
  length: 20,
  dateRange: { min: '2/20/2020', max: '5/20/2020' },
  categories: ['clothing', 'housing'],
  cashFlow: ['income', ]
});

someRandomData.breakIntoTens()
const firstGuy = someRandomData.tens[0][0]
console.log(someRandomData.tens)

/**
 * The table would take the whole data
 * It'll then break down the data into tens
 * It'll render the tens in a pagination manner
 * Each dataPoint would have an ID assined from UUID
 * The dataPoint methods can be called from the frontend
 * All the data has to be considered from useReducer sense,
 */