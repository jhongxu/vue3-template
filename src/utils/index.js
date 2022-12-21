
export function println(target, logHeader = '') {
    function start() {
        console.group(`output => %c${logHeader}`, 'color:green;')
    }

    function end() {
        console.log(`log end => %c${logHeader}`, 'color:red;')
        console.groupEnd()
    }

    function log(target) {

    }
    if(){

    }

}
