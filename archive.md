```js
  filterFunction = (field) => {
    if (field.length > 0) {
      this._filteredData = this._filteredData.filter((x) => {
        if (field.includes(x.category)) {
          return x
        }
        return false
      })
    }
    return this._filteredData
  }
```