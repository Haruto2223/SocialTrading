const https = require("https"); 
const crypto = require('crypto'); 
const buffer = require('buffer'); 
// const { json } = require("stream/consumers");
// const querystring = require('querystring');
  
function MT5Request(server, port) { 
  this.server = server; 
  this.port = port; 
  this.https = new https.Agent(); 
  this.https.maxSockets = 1; // only one connection is used 
} 
  
MT5Request.prototype.Get = function (path, callback) { 
  var options = { 
    hostname: this.server, 
    port: this.port, 
    path: path, 
    agent: this.https, 
    headers: { "Connection": "keep-alive" },     
    rejectUnauthorized: false, // comment out this line if you use self-signed certificates 
  }; 
  var req = https.get(options, function (res) { 
    res.setEncoding('utf8'); 
    var body = ""; 
    res.on('data', function (chunk) { 
      body += chunk; 
    }); 
    res.on('end', function () { 
      callback(null, res, body); 
    }); 
  }); 
  req.on('error', function (e) { 
    console.log(e); 
    return callback(e); 
  }); 
}; 
  
MT5Request.prototype.Post = function (path, body, callback) { 
  var options = { 
    hostname: this.server, 
    port: this.port, 
    path: path, 
    agent: this.https, 
    method: "POST", 
    headers: { 
      "Connection": "keep-alive", 
      "Content-Type": "application/x-www-form-urlencoded", 
      "Content-Length": body.length, 
    }, 
    rejectUnauthorized: false, // comment out this line if you use self-signed certificates 
  }; 
  var req = https.request(options, function (res) { 
    res.setEncoding('utf8'); 
    var body = ""; 
    res.on('data', function (chunk) { 
      body += chunk; 
    }); 
    res.on('end', function () { 
      callback(null, res, body); 
    }); 
  }); 
  req.on('error', function (e) { 
    console.log(e); 
    return callback(e); 
  }); 
  req.write(body); 
  req.end(); 
}; 
  
  
MT5Request.prototype.ParseBodyJSON = function (error, res, body, callback) { 
  if (error) { 
    callback && callback(error); 
    return (null); 
  } 
  if (res.statusCode !== 200) { 
    callback && callback(res.statusCode); 
    return (null); 
  } 
  var answer = null; 
  try { 
    answer = JSON.parse(body); 
  } 
  catch { 
    console.log("Parse JSON error"); 
  } 
  if (!answer) { 
    callback && callback("invalid body answer"); 
    return (null); 
  } 
  var retcode = parseInt(answer.retcode); 
  if (retcode !== 0) { 
    callback && callback(answer.retcode); 
    return (null); 
  } 
  return (answer); 
} 
  
MT5Request.prototype.ProcessAuth = function (answer, password) { 
  //--- 
  var pass_md5 = crypto.createHash('md5'); 
  var buf = buffer.transcode(Buffer.from(password, 'utf8'), 'utf8', 'utf16le'); 
  pass_md5.update(buf, 'binary'); 
  var pass_md5_digest = pass_md5.digest('binary'); 
  //--- 
  var md5 = crypto.createHash('md5'); 
  md5.update(pass_md5_digest, 'binary'); 
  md5.update('WebAPI', 'ascii'); 
  var md5_digest = md5.digest('binary'); 
  //--- 
  var answer_md5 = crypto.createHash('md5'); 
  answer_md5.update(md5_digest, 'binary'); 
  buf = Buffer.from(answer.srv_rand, 'hex'); 
  answer_md5.update(buf, 'binary'); 
  //--- 
  return (answer_md5.digest('hex')); 
} 
  
MT5Request.prototype.ProcessAuthFinal = function (answer, password, cli_random) { 
  //--- 
  var pass_md5 = crypto.createHash('md5'); 
  var buf = buffer.transcode(Buffer.from(password, 'utf8'), 'utf8', 'utf16le'); 
  pass_md5.update(buf, 'binary'); 
  var pass_md5_digest = pass_md5.digest('binary'); 
  //--- 
  var md5 = crypto.createHash('md5'); 
  md5.update(pass_md5_digest, 'binary'); 
  md5.update('WebAPI', 'ascii'); 
  var md5_digest = md5.digest('binary'); 
  //--- 
  var answer_md5 = crypto.createHash('md5'); 
  answer_md5.update(md5_digest, 'binary'); 
  answer_md5.update(cli_random, 'binary'); 
  return (true); 
} 
  
MT5Request.prototype.Auth = function (login, password, build, agent, callback) { 
  if (!login || !password || !build || !agent) 
    return; 
  var self = this; 
  self.Get("/api/auth/start?version=" + build + "&agent=" + agent + "&login=" + login + "&type=manager", function (error, res, body) { 
    var answer = self.ParseBodyJSON(error, res, body, callback); 
    if (answer) { 
      var srv_rand_answer = self.ProcessAuth(answer, password); 

      var cli_random_buf = crypto.randomBytes(16); 
      var cli_random_buf_hex = cli_random_buf.toString('hex');
      self.Get("/api/auth/answer?srv_rand_answer=" + srv_rand_answer + "&cli_rand=" + cli_random_buf_hex, function (error, res, body) { 
        var answer = self.ParseBodyJSON(error, res, body, callback); 
        if (answer) { 
          if (self.ProcessAuthFinal(answer, password, cli_random_buf)) 
            callback && callback(null); 
          else 
            callback && callback("invalid final auth answer"); 
        } 
      }); 
    } 
  }); 
  return (true); 
}; 

module.exports.getFollowers = function(server, port, id){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) { 
        console.log(error); 
        return; 
      } 
      req.Get("/api/trading/get?followerId="+id, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return; 
          } 
          // var answer = req.ParseBodyJSON(error, res, body, null);
          return body;
      });
  });
};

module.exports.getProviders = function(server, port, id){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) { 
        console.log(error); 
        return; 
      } 
      req.Get("/api/trading/getProviders?id="+id, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return; 
          } 
          // var answer = req.ParseBodyJSON(error, res, body, null);
          return body;
      });
  });
};

module.exports.login = function(server, port, id, password){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) { 
        console.log(error); 
        return; 
      } 
      req.Get("/api/trading/login?id="+id+"&password="+password, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return; 
          } 
          // var answer = req.ParseBodyJSON(error, res, body, null);
          return body;
      });
  });
};

module.exports.providerRegister = function(server, port, id, password, fee){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) { 
        console.log(error); 
        return; 
      } 
      req.Get("/api/trading/register/provider?id="+id+"&password="+password+"&fee="+fee, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return; 
          } 
          console.log(body)
          return body;
      });
  });
};

module.exports.followerRegister = function(server, port, followerId, password, strategy, providerId){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) { 
        console.log(error); 
        return; 
      } 

      req.Get("/api/trading/register/follower?id="+followerId+"&password="+password+"&=providerId"+providerId+"&strategy="+strategy, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return; 
          } 
          return body;
      });
  });
};

module.exports.getproviderall = function(server, port){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) {
        console.log(error); 
        return; 
      } 

      req.Get("/api/trading/getAllProvider", function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return;
          }
          return body;
      });
  });
};

module.exports.getmyinfo = function(server, port, id){
  const req = new MT5Request(server, port);
  req.Auth(1016, "jin2022@", 3320, "manager", function (error) { 
      if (error) {
        console.log(error); 
        return; 
      } 

      req.Get("/api/trading/getInfo?id="+id, function (error, res, body) { 
          if (error) { 
            console.log(error); 
            return;
          }
          console.log(body);
          return body;
      });
  });
};