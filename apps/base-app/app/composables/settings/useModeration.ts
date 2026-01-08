import { moderatePost } from '@atproto/api'

// First get the user's moderation prefs and their label definitions
// =

const prefs = await agent.getPreferences()
const labelDefs = await agent.getLabelDefinitions(prefs)

// We call the appropriate moderation function for the content
// =

const postMod = moderatePost(postView, {
  userDid: agent.session.did,
  moderationPrefs: prefs.moderationPrefs,
  labelDefs,
})

// We then use the output to decide how to affect rendering
// =

// in feeds
if (postMod.ui('contentList').filter) {
  // don't include in feeds
}
if (postMod.ui('contentList').blur) {
  // render the whole object behind a cover (use postMod.ui('contentList').blurs to explain)
  if (postMod.ui('contentList').noOverride) {
    // do not allow the cover the be removed
  }
}
if (postMod.ui('contentList').alert || postMod.ui('contentList').inform) {
  // render warnings on the post
  // find the warnings in postMod.ui('contentList').alerts and postMod.ui('contentList').informs
}

// viewed directly
if (postMod.ui('contentView').filter) {
  // don't include in feeds
}
if (postMod.ui('contentView').blur) {
  // render the whole object behind a cover (use postMod.ui('contentView').blurs to explain)
  if (postMod.ui('contentView').noOverride) {
    // do not allow the cover the be removed
  }
}
if (postMod.ui('contentView').alert || postMod.ui('contentView').inform) {
  // render warnings on the post
  // find the warnings in postMod.ui('contentView').alerts and postMod.ui('contentView').informs
}

// post embeds in all contexts
if (postMod.ui('contentMedia').blur) {
  // render the whole object behind a cover (use postMod.ui('contentMedia').blurs to explain)
  if (postMod.ui('contentMedia').noOverride) {
    // do not allow the cover the be removed
  }
}