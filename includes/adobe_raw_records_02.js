function adobe_raw_records_02() {
  return `adobe_raw_records_02 as (
  SELECT
    *,
    LEAD(date_time, 1) OVER (
      PARTITION BY post_visid_high,
      post_visid_low,
      visit_num,
      date(datetime(date_time, "Australia/Sydney"))
      ORDER BY
        visit_page_num,
        date_time
    ) as nextstamp,
    LEAD(visit_page_num, 1) OVER (
      PARTITION BY post_visid_high,
      post_visid_low,
      visit_num,
      date(datetime(date_time, "Australia/Sydney"))
      ORDER BY
        visit_page_num,
        date_time
    ) as nextvisnum,
    LEAD(post_prop16, 1) OVER (
      PARTITION BY post_visid_high,
      post_visid_low,
      visit_num,
      date(datetime(date_time, "Australia/Sydney"))
      ORDER BY
        visit_page_num,
        date_time
    ) as nextArticleID,
    LAG(post_prop16, 1) OVER (
      PARTITION BY post_visid_high,
      post_visid_low,
      visit_num,
      date(datetime(date_time, "Australia/Sydney"))
      ORDER BY
        visit_page_num,
        date_time
    ) as prevArticleID
  FROM
    adobe_raw_records_01
  WHERE
    DATE(IngestTime) between DATE_SUB(current_date(), INTERVAL 1 DAY)
    and DATE_SUB(current_date(), INTERVAL 30 DAY)
    ---- between  '2021-11-01' and '2021-11-30'
)`;
}
module.exports = {adobe_raw_records_02};
  