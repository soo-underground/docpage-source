# Trying to create tabs in markdown

```http
GET / HTTP/1.1
User-Agent: MyClient/1.0.0
Accept: application/vnd.travis-ci.2+json
Host: api.travis-ci.org

HTTP/1.1 200 OK
Content-Type: application/json

{"hello":"world"}
```

```shell
$ travis raw /
{"hello":"world"}
```

```ruby
require 'travis'

# You usually don't want to fire API requests manually
client = Travis::Client.new
client.get_raw('/') # => {"hello"=>"world"}

client.get('/repos/sinatra/sinatra')
# => {"repo"=>#<Travis::Client::Repository: sinatra/sinatra>}
```
