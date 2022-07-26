function date() {
  return `dw_partition_date between DATE_SUB(current_date(), INTERVAL 1 DAY)
    and DATE_SUB(current_date(), INTERVAL 30 DAY)`;
}
module.exports = {
  date
};
