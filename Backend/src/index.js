const express = require("express");
const db = require("./Model");
const cors = require("cors");

let isLoggedIn = false;
const port = 3000;
// Validity Schema
// const Joi = require("@hapi/joi");

const app = express();

var numUsers = 0;
var numDel = 0;

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log("Started server at ", port);
});
function Query(actQuery, arg) {
  return new Promise((resolve, reject) => {
    db.query(actQuery, arg, (err, results) => {
      if (err) {
        return reject;
      }
      resolve(results);
    });
  });
}
app.post("/api/create", (req, res) => {
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO Login  VALUES (?,?,?)",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    }
  );
});
app.get("/api/get", (req, res) => {
  db.query("select * from Login", (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  //   Query(
  //     "select * from Login where Login.Email_Id = ? AND Login.Password = ?;",
  //     [email, password]
  //   )
  //     .then((results) => {
  //       console.log(results);
  //       var ret = {
  //         status: 200,
  //         description: "User Logged in successfully",
  //         data: results,
  //       };
  //       if (results.length === 0) {
  //         ret.status = 400;
  //         // ret.description = err;
  //       }
  //       res.send(ret);
  //     })
  //     .catch((err) =>
  //       setImmediate(() => {
  //           console.log(err);
  //         throw err;
  //       })
  //     );
  //   (async () => {
  //     const temp = await Query(
  //       "select * from Login where Login.Email_Id = ? AND Login.Password = ?;",
  //       [email, password]
  //     );
  //   })();
  db.query(
    "select * from Login, User where User.Email_Id = Login.Email_Id and Login.Email_Id = ? AND Login.Password = ?;",
    [email, password],
    (err, results) => {
      console.log("res in index", results);
      var ret = {
        status: 200,
        description: "User Logged in successfully",
        data: results,
      };
      if (err) {
        ret.status = 500;
        ret.description = err;
      } else if (results.length === 0) {
        ret.status = 400;
        ret.description = err;
      }
      res.send(ret);
    }
  );
});

app.post("/api/user", (req, res) => {
  const { email } = req.body;
  //   console.log(req.body);
  db.query(
    "select * from User where User.Email_Id=?;",
    [email],
    (err, results) => {
      //   console.log("res in ap/user", results, email);
      // console.log(results);
      var ret = {
        status: 200,
        description: err,
        data: results,
      };
      if (err) {
        ret.status = 500;
      } else if (results.length === 0) {
        res.status = 400;
      }
      res.send(ret);
    }
  );
});
app.post("/api/userSubs", (req, res) => {
    db.query(
        "select * from User where User.Email_Id=?;",
        [email],
        (err, results) => {
          //   console.log("res in ap/user", results, email);
          // console.log(results);
          var ret = {
            status: 200,
            description: err,
            data: results,
          };
          if (err) {
            ret.status = 500;
          } else if (results.length === 0) {
            res.status = 400;
          }
          res.send(ret);
        }
      );
});
app.post("/api/manager", (req, res) => {
  const { email } = req.body;
  //   console.log(req.body);
  db.query(
    "select * from Manager where Manager.Email_Id=?;",
    [email],
    (err, results) => {
      //   console.log("res in ap/user", results, email);
      // console.log(results);
      var ret = {
        status: 200,
        description: err,
        data: results,
      };
      if (err) {
        ret.status = 500;
      } else if (results.length === 0) {
        res.status = 400;
      }
      res.send(ret);
    }
  );
});

app.post("/api/publication", (req, res) => {
  const { publicationId } = req.body;
  db.query(
    "select * from Publication where Publication.Publication_Id=?",
    [publicationId],
    (err, results) => {
      var ret = {
        status: 200,
        description: err,
        data: results,
      };
      if (err) {
        ret.status = 500;
      } else if (results.length === 0) {
        res.status = 400;
      }
      res.send(ret);
    }
  );
});

app.post("/api/register", (req, res) => {
  db.query("select count(*) as count from user", (err, res1) => {
    console.log(res1);
    id = res1[0].count;
    const { username, phno, email, password } = req.body;
    db.query("insert into Login values (?, ?)", [email, password]);
    db.query("select * from Login;", [], (err1, results) => {
      console.log("login register");
      console.log(err);
      console.log(results);
    });
    db.query(
      "insert into User values (?,?,?,?)",
      [id + 1, username, email, phno],
      (err1, results) => {
        console.log(err);
        console.log("register", id + 1, username, email, phno);
        console.log("Hello", username, id);
        var ret = { userId: id + 1 };
        res.send(ret);
      }
    );
  });
  // id = getId();
  console.log("Vamashi");
});

app.post("/api/userPub", (req, res) => {
  db.query("select * from publication", (err, res1) => {
    // console.log("userpub",res1);
    datapart = { ...res1, key: res1.Publication_Id };
    var ret = {
      status: 200,
      data: res1,
    };
    if (err) {
      ret.status = 500;
    } else if (res1.length === 0) {
      ret.status = 400;
    }
    res.send(ret);
  });
});
app.post("/api/subscribe", (req, res) => {
    console.log("subscribe", res);
  db.query("select count(*) as count from subscription", (err1, res1) => {
    console.log(res1);
    sub_id = res1[0].count;
    const { address, startDate, email, duration, publicationId } = req.body;
    db.query(
      "select Id from User where User.Email_Id=?;",
      [email],
      (err2, res2) => {
        user_id = res2[0].Id;
        db.query("insert into Login values (?, ?)", [email, password]);
        db.query("select * from Login;", [], (err3, res3) => {
          console.log("login register");
          console.log(err3);
          console.log(res3);
        });
        console.log(user_id);
        // db.query(
        //   "insert into Subscription values (?,?,?,?)",
        //   [id + 1, username, email, phno],
        //   (err4, res4) => {
        //     console.log(err4);
        //     console.log("register", id + 1, username, email, phno);
        //     console.log("Hello", username, id);
        //     var ret = { userId: id + 1 };
        //     res.send(ret);
        //   }
        // );
      }
    );
  });
});
