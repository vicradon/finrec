import generateRandomData from './generate_random_data'

class randomData {
  constructor(filters) {
    const { length, dateRange, categories, cashFlow, paymentMode, amount, description } = filters
    this._data = generateRandomData(length);
    this._filteredData = this._data
    this._dateRange = dateRange
    this._categories = categories
    this._cashFlow = cashFlow
    this._paymentMode = paymentMode
    this._amount = amount
    this._description = description
    this._tens = []
    this.filterData()
  }
  filterFunction = (field, dataPointField) => {
    if (field && field.length > 0) {
      this._filteredData = this._filteredData.filter((x) => {
        if (field.includes(x[`${dataPointField}`])) {
          return x
        }
        return false
      })
    }
    return this._filteredData
  }
  dateFilter = () => {
    if (this._dateRange.min && this._dateRange.max) {
      const _minDate = new Date(this._dateRange.min)
      const _maxDate = new Date(this._dateRange.max)

      this._filteredData = this._filteredData.filter((x) => {
        const theDate = new Date(x.date)
        if (theDate >= _minDate && theDate <= _maxDate) {
          return x
        }
        return false
      })
    }
  }

  amountFilter = () => {
    if (this._amount.min && this._amount.max) {
      const _min = this._amount.min
      const _max = this._amount.max

      this._filteredData = this._filteredData.filter((x) => {
        const _amount = x.amount
        if (_amount >= _min && _amount <= _max) {
          return x
        }
        return false
      })
    }
  }

  descriptionFilter = () => {
    if (this._description && this._description.length > 0) {
      const descriptionArr = this._description.split(' ')

      this._filteredData = this._filteredData.filter((x) => {
        const itemDescriptionArr = x.description.split(' ')

        const itemInQuery = itemDescriptionArr.filter((x) =>  descriptionArr.includes(x)).length
        if (itemInQuery > 0) {
          return x
        }
        return false
      })
    }
    return this._filteredData
  }

  filterData = () => {
    this.dateFilter()
    this.filterFunction(this._categories, 'category')
    this.filterFunction(this._cashFlow, 'cashFlow')
    this.filterFunction(this._paymentMode, 'paymentMode')
    this.amountFilter()
    this.descriptionFilter()
  }
  breakIntoTens = () => {
    for (let i = 0; i < this._filteredData.length; i += 10) {
      this._tens.push(this._filteredData.slice(i, i + 10))
    }
  }
  get tens() {
    this.breakIntoTens()
    return this._tens
  }
  get data() {
    return this._filteredData
  }
}


export default randomData