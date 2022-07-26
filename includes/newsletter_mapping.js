// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);

function newsletter(newsletterCodeField) {
  return `CASE
      when lower(split(campaign, '{') [offset(0)]) like '%facebook%' then 'Facebook'
      when lower(split(campaign, '{') [offset(0)]) like '%email%' then 'Email'
      when lower(split(campaign, '{') [offset(0)]) like '%referral%' then 'Referral'
      else 'UNKNOWN'
    end`;
}
module.exports = {
  newsletter
};



