process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

// Reads complete line from STDIN
function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var i = 4;
    var d = 4.0;
    var s = "HackerRank ";
    let number = 5;
    let floatingNumber = 2.0;
    let language = 'JavaScript';

    // Read and save an integer, double, and String to your variables.
    number = +readLine();
    floatingNumber = +readLine();
    language = readLine();


    console.log(number + i);
    console.log(d + floatingNumber);
    console.log(s + language);

}

main();

