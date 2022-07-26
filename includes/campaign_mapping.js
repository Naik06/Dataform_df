// Read more in the JS API documentation here: https://docs.dataform.co/guides/javascript/js-api

// publish("new_table")
//   .type("table")
//   .query(ctx => `select * from ${ctx.ref("source_table")}`);
function campaign(campaignCodeField) {
  return `CASE
      when (
             lower(split(campaign, '{') [offset(0)]) like '%facebook%'
             or lower(split(campaign, '{') [offset(0)]) like '%email%'
             or lower(split(campaign, '{') [offset(0)]) like '%referral%'
          ) then upper(split(campaign, '{') [offset(0)])
          else 'UNKNOWN'
         end`;
}
module.exports = {campaign};
