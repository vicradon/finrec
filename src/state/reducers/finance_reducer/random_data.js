import generateRandomData from './generate_random_data'

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

      this._filteredData = this._data.filter((x) => {
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

export default randomData