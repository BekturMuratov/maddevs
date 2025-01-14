/* eslint-disable no-unused-vars */
function redirectToCorrectPostUrl(req, res, next) {
  const blogPageTypes = ['author', 'tag']
  /**
   * Get blog page type and postUid from req.path
   * If page type is author or tag - redirect to /blog/${postUid}
   * else next
   * @example
   * // path = '/insights/blog/author/denis/post-custom-slug'
   * // type = 'author', postUid = 'post-custom-slug'
   */
  const isBlogPost = /^\/blog\/(.*\d|\w+)/.test(req.url)
  const [_, type, __, postUid] = req.path.split('/').filter(path => Boolean(path))
  if (isBlogPost) {
    res.redirect(301, `/insights${req.url}`)
  } else if (blogPageTypes.includes(type) && postUid) {
    res.redirect(301, `/insights/blog/${postUid}`)
  } else {
    next()
  }
}

module.exports = redirectToCorrectPostUrl
