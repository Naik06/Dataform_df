// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);

function Cohort_Traffic(Cohort_TrafficCodeField) {
  return `CASE
          WHEN upper(post_evar21) like '%-HOT-%' THEN 'HOT'
          WHEN upper(post_evar21) like '%-WARM-%' THEN 'WARM'
          WHEN upper(post_evar21) like '%-COLD-%' THEN 'COLD'
          ELSE 'UNKNOWN'
        END`;
}
module.exports = {
  Cohort_Traffic
};
