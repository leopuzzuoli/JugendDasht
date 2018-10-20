var phantom = require('phantom');

phantom.create(function(ph) {
  ph.createPage(function(page) {
    var url = "http://www.bdtong.co.kr/index.php?c_category=C02";
    page.open(url, function() {
      page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
        page.evaluate(function() {
          $('.listMain > li').each(function() {
            console.log($(this).find('a').attr('href'));
          });
        }, function() {
          ph.exit()
        });
      });
    });
  });
});
