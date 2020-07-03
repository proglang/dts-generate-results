var ZooKeeper = require("zookeeper");

zk = new ZooKeeper({
    connect: "localhost:2181",
    timeout: 2000,
});

var key = "/acl-test";

zk.connect(function (err, client) {
    if (err) throw err;
    console.log("zoolocker: Connected to Zookeeper, id=%s", zk.client_id);

    client.add_auth("digest", "username:password", function (rc, error) {
        console.log("ADD_AUTH", rc, error);

        client.a_create(key, "", {
            version: -1
        }, function (rc, error, path) {
            console.log("CREATE", rc, error);

            client.a_set_acl(key, -1, [ZooKeeper.ZOO_CREATOR_ALL_ACL, ZooKeeper.ZOO_OPEN_ACL_UNSAFE, {
                perms: ZooKeeper.ZOO_PERM_WRITE,
                scheme: "world",
                auth: "anyone",
            }], function (rc, error) {
                console.log("SET_ACL", rc, error);

                client.a_get_acl(key, function (rc, error, acl, stat) {
                    console.log("GET_ACL", rc, error, acl);
                });
            });
        });
    });
});
