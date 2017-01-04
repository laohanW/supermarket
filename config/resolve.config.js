var path=require('path');
var dirVars=require('../config/dir-vars.config.js');
module.exports={
    alias:{
        pageDir:dirVars.page,
        lessDir:path.resolve(dirVars.public,'less/'),
        publicDir:dirVars.public
    }
};
