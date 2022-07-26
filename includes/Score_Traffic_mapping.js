// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);

function Score_Traffic(Score_TrafficCodeField) {
return `CASE
          WHEN upper(post_evar21) like '%-SCORE-%' THEN 'SCORE'
          WHEN upper(post_evar21) like '%-NOSCORE-%' THEN 'NOSCORE'
          ELSE 'UNKNOWN'
        END `;
}
module.exports = {Score_Traffic};