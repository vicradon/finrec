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

export default dataPoint