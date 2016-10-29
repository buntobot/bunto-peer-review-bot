var pe = process.env,
    config = {};

/**
 * To configure the bot, either set the values here directly -
 * or set environment variables.
 * SEE README.MD FOR DETAILS
 */
// GHE user may need to setup this
config.github = pe.github || '',
config.user = pe.targetUser || 'bunto',
config.repo = pe.targetRepo || 'bunto',
config.botUser = pe.botUser || 'buntobot',
config.botPassword = pe.botPassword || '',
config.labelReviewed = pe.labelReviewed || 'peer-reviewed',
config.labelNeedsReview = pe.labelNeedsReview || 'needs-peer-review',
config.reviewsNeeded = pe.reviewsNeeded || 3;
config.instructionsComment = pe.instructionsComment || '';
config.pullRequestsStatus = pe.pullRequestsStatus || 'open';
config.mergeOnReview = pe.mergeOnReview || false;
config.oauth2token = pe.oauth2token || '';
config.excludeLabels = pe.excludeLabels || 'no-review-needed';
config.filenameFilter = pe.filenameFilter || '[".md"]';

// Setup Instructions Comment
if (config.instructionsComment === '') {
    var comment = 'Hi! I\'m your friendly/stabby Case Study Bot from the Bunto community. For this case study to be labeled as "peer-reviewed", ' +
                  'you\'ll need at least ' + config.reviewsNeeded + ' comments containing the magic phrase "LGTM" ' +
                  '("Looks good to me" also works, for those of us that are really verbose).';

    config.instructionsComment = comment;
}

if (config.instructionsComment.indexOf('{reviewsNeeded}')) {
    config.instructionsComment = config.instructionsComment.replace('{reviewsNeeded}', config.reviewsNeeded);
}

module.exports = config;
