{
    externals: [
        // Every non-relative module is external
        // abc -> require("abc")
        /^[a-z\-0-9]+$/
    ]
}
