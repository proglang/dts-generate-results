require("ibm_db").open(connectionString, function (err, conn){
  //conn is already open now if err is falsy
});
