function renderScript(table) {
  return `if(
          (
            post_event_list like '=%215,%'
            or post_event_list like '%,215,%'
            or post_event_list like '%,215'
            or post_event_list like '215,%'
          )
          and post_prop9 LIKE 'article'
          and post_page_event = 0
          and post_evar16 is not null,
          1,
          0
        ) as is_breach_sub_flag,
        if(
          (
            post_event_list like '=%215,%'
            or post_event_list like '%,215,%'
            or post_event_list like '%,215'
            or post_event_list like '215,%'
          )
          and post_prop9 LIKE 'acq+shopfront'
          and post_evar16 is not null,
          1,
          0
        ) as is_non_breach_sub_flag,
        if(
          (
            post_event_list like '=%205,%'
            or post_event_list like '%,205,%'
            or post_event_list like '%,205'
            or post_event_list like '205,%'
          )
          and post_page_event in (0, 100),
          1,
          0
        ) as is_share_flag,
        if(
          (
            post_event_list like '=%209,%'
            or post_event_list like '%,209,%'
            or post_event_list like '%,209'
            or post_event_list like '209,%'
          )
          and post_page_event in (0, 100, 102),
          1,
          0
        ) as is_link_clicks_flag,
        if(
          (
            post_event_list like '=%230,%'
            or post_event_list like '%,230,%'
            or post_event_list like '%,230'
            or post_event_list like '230,%'
          ),
          1,
          0
        ) as is_activity_centre_clicks_flag,
        if(
          (
            post_event_list like '=%20140,%'
            or post_event_list like '%,20140,%'
            or post_event_list like '%,20140'
            or post_event_list like '20140,%'
          )
          and post_page_event in (100),
          1,
          0
        ) as is_newsletter_signup_flag,
        if(
          (
            post_event_list like '=%701,%'
            or post_event_list like '%,701,%'
            or post_event_list like '%,701'
            or post_event_list like '701,%'
          )
          and post_page_event in (76),
          1,
          0
        ) as is_videostart_flag,
        --Comments
        if(
          (
            post_event_list like '=%210,%'
            or post_event_list like '%,210,%'
            or post_event_list like '%,210'
            or post_event_list like '210,%'
          )
          and post_page_event in (0, 100),
          1,
          0
        ) as is_article_comment_flag,
        if(
          (
            post_event_list like '=%20151,%'
            or post_event_list like '%,20151,%'
            or post_event_list like '%,20151'
            or post_event_list like '20151,%'
          )
          and post_page_event in (0, 100),
          1,
          0
        ) as is_comment_reply_flag,
        if(
          (
            post_event_list like '=%20152,%'
            or post_event_list like '%,20152,%'
            or post_event_list like '%,20152'
            or post_event_list like '20152,%'
          )
          and post_page_event in (0, 100),
          1,
          0
        ) as is_comment_like_flag,
        if(
          (
            post_event_list like '=%20153,%'
            or post_event_list like '%,20153,%'
            or post_event_list like '%,20153'
            or post_event_list like '20153,%'
          )
          and post_page_event in (0, 100),
          1,
          0
        ) as is_comment_viewmore_flag,
        ${newsletter_mapping.newsletter("lower(split(campaign, '{') [offset(0)])")} AS newsletter,
        ${campaign_mapping.campaign("lower(split(campaign, '{') [offset(0)])")} AS campaign,
        post_prop7 as section_level_4,
        post_prop8 as section_level_5,
        ${Cohort_Traffic_mapping.Cohort_Traffic("upper(post_evar21)")} as Cohort_Traffic,
        substr(post_evar21, 1, 2) as Masthead_Traffic,
        ${Score_Traffic_mapping.Score_Traffic("upper(post_evar21)")} as Score_Traffic,
        ${Test_Traffic_mapping.Test_Traffic("upper(post_evar21)")} as Test_Traffic,
        --------
        cast(
          split("", '|') [safe_ordinal(1)] as STRING
        ) newsletter_type,
        cast(
          split("", '|') [safe_ordinal(2)] as STRING
        ) newsletter_position1,
        cast(
          split("", '|') [safe_ordinal(2)] as STRING
        ) newsletter_position2,
        -- split(evar127,'|')[safe_ordinal(1)] newsletter_type,
        -- split(evar127,'|')[safe_ordinal(2)] newsletter_position1,
        -- split(evar127,'|')[safe_ordinal(2)] newsletter_position2,
        -----------------selecting columns for non-articles
        --CASE when post_prop14 = 'registered' then 'Registered' when post_prop14 = 'subscriber' then 'Subscriber'
        --else 'Anonymous' end member_type,
        evar37 breach_destination,
        evar13 think_source_code,
        evar38 think_pkg_code,
        evar39 gallery_image,
        evar48 gallery_id,
        if (
          (
            ifnull(post_prop9, 'Unspecified') LIKE '%story%'
            or ifnull(post_prop9, 'Unspecified') LIKE '%article%'
            or ifnull(post_prop9, 'Unspecified') like '%blogs%'
            or ifnull(post_prop9, 'Unspecified') LIKE '%gallery%'
          ),
          'Article',
          'Non-Article'
        ) Type
        -----------------------
    `;
}
module.exports = {
  renderScript
};
