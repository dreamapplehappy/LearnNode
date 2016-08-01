function start() {
    console.log('--Request handler start was called!');
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return "Hello Start";
}

function upload() {
    console.log('--Request handler upload was called!');
    return 'Upload'
}

function index() {
    console.log('--Request handler index was called!');
    return 'Index'
}

exports.start = start;
exports.upload = upload;
exports.index = index;