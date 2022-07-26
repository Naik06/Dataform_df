// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);
function Test_Traffic(Test_TrafficCodeField) {
return `CASE
          WHEN upper(post_evar21) like '%-TEST-%' THEN 'TEST'
          WHEN upper(post_evar21) like '%-CONTROL-%' THEN 'CONTROL'
          ELSE 'UNKNOWN'
        END`;
}
module.exports = {Test_Traffic };

        