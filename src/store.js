const uuid = require('uuid/v4')

const bookmarks = [{
    id: uuid(),
    title: 'Sample',
    url: 'http://www.bookmarks.com',
    description: 'This is a bookmark',
    rating: 3
  },
{
    id: uuid(),
    title: 'Sample2',
    url: 'http://www.bookmarks2.com',
    description: 'This is a second bookmark',
    rating: 5 
}
]
  
  module.exports = { bookmarks }