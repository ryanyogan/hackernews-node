const feed = (parent, args, context, info) => context.db.query.links({}, info);

module.exports = {
  feed
};
