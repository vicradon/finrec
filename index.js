// @ts-check
class dataPoint {
  constructor(category, date, paymentMode, description, amount, isChecked) {
    this.category = category
    this.date = date
    this.paymentMode = paymentMode
    this.description = description
    this.amount = amount
    this.isChecked = isChecked
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
    const aDataPoint = new dataPoint(
      categories[getRandomIndex(categories)],
      getRandomDate(),
      paymentModes[getRandomIndex(paymentModes)],
      descriptions[getRandomIndex(descriptions)],
      getRandomAmount(200, 5000),
      false
    )
    data.push(aDataPoint)
  }
  return data.sort((a, b) => {
    if (new Date(a.date) > new Date(b.date)) return 1;
    return -1
  })
}
// export default generateRandomData

class randomData {
  constructor(length, dateRange, category, cashflow, paymentMode, amount) {
    this._data = generateRandomData(length);
    this._filteredData = this._data
    this.dateRange = dateRange
    this.tens = []

  }
  breakIntoTens = () => {
    if (this.dateRange) {
      const _minDate = new Date(this.dateRange.min)
      const _maxDate = new Date(this.dateRange.max)

      this._filteredData = this._data.filter(x => {
        const theDate = new Date(x.date)
        if (theDate >= _minDate && theDate < _maxDate) return x
      })
    }

    for (let i = 0; i < this._data.length; i += 10) {
      this.tens.push(this._filteredData.slice(i, i + 10))
    }
  }
  tens = () => this.tens;


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
   * Have a data
   * Have filters: Default is no-filter
   * Return tens of the filtered data
   */


}
//, 

const someRandomData = new randomData(20, { min: '2/20/2020', max: '5/20/2020' });
someRandomData.breakIntoTens()
const firstGuy = someRandomData.tens[0][0]
console.log(someRandomData.tens)

/**
 * The table would taken the whole data
 * It'll then break down the data into tens
 * It'll render the tens in a pagination manner
 * Each dataPoint would have an ID assined from UUID
 * The dataPoint methods can be called from the frontend
 * All the data has to be considered from useReducer sense,
 */