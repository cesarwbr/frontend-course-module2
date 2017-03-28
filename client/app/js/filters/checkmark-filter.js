function CheckmarkFilter () {
  return function (input) {
    const check = input > 10 ? '\u2713' : '\u2718'

    return check
  }
}

export default CheckmarkFilter
