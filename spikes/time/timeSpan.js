function getDateRange(daysAgo,durationInMinutes,now) {
    const MS_PER_MINUTE = 60000;
    const yesterday = new Date();

    if (!durationInMinutes) {
      durationInMinutes = 60;
    };

    if (!now) {
      now = new Date();
    }

    yesterday.setDate(now.getDate()-daysAgo);

    const from = new Date(yesterday.getTime() - durationInMinutes * MS_PER_MINUTE);
    // yesterday has mutated, so multiply by 2
    yesterday.setDate(now.getDate()-daysAgo);
    const to = new Date(yesterday.getTime() + durationInMinutes * MS_PER_MINUTE);

    search = {};
    search.from = from.getTime();
    search.to = to.getTime();

    return search
}

module.exports = getDateRange;
