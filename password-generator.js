var generator = require('generate-password');

const modepass=()=>{
    var password = generator.generate({
        length: 10,
        numbers: true
    }
    );
    console.log(password);
}

// 'uEyMTw32v9'
module.exports=modepass