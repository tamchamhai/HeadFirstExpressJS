
class SiteController {
  home(req, res) {
    res.render('home')
  }

  contact(req, res) {
    res.send('Here is the contact page')
  }

  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController 
