const express = require('express')
const Twitter = require('twitter');

const app = express();

app.use(express.static("public"));

app.get("/search", function(req, res) {

    console.log(req.query);
    if (req.query && req.query.q) {
        twitterSearch(req.query.q)
            .then(function(result) {
                res.json(result);
            })
    }
});

app.listen(3000, function() {
    console.log("Listening to http://localhost:3000. Press CTRL+C to escape.")
});

const client = new Twitter({
    consumer_key: 'HlGV8UnlvdmmMc80d530kHwv1',
    consumer_secret: 'YnsRc5hU0a3ugHaB3T0KZ9ilbTPiujWpC7CIBThNdjuQroiYuY',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAAAhy0wAAAAAACu4o7w6p2ZPEdnrjrwI2prcS1nQ%3Dgy97WziaWtquskc3Lf0sE8o2MGJfBCVwj7pvRW2oVsmilLA9Tz'
});

function twitterSearch(q) {

    return client.get('search/tweets', {q:q});
}
