import moment from 'moment'

formatDate = (date, format = 'DD/MM/YYYY') => {
  return moment(date).format(format)
}

const Utils = {
  formatDate,
}
export default Utils
