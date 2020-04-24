function myLanguages(results) {
    let languageTestResults = results;
    let resultsArray = Object.keys(languageTestResults).map(function (key) {
        return [key, languageTestResults[key]];
    });

    resultsArray.sort(function (first, second) {
        return second[1] - first[1];
    });

    let newArray = [];

    for (i = 0; i < resultsArray.length; i++) {
        if (resultsArray[i][1] >= 60) {
            newArray.push(resultsArray[i][0])
        }
    } return (newArray);
}

myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
