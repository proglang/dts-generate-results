var mongoosePaginate = require('mongoose-paginate-v2');

mongoosePaginate.paginate.options = { 
    lean:  true,
    limit: 20
};
