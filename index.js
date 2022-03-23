
// let winningYear = record.find(superbowlWin)
// // function superbowlWin(record){
//     if (record.result === "W") {
//         return record.year
// //    }
// //    return winningYear ;
// //



// const record = [
//     { year: "2015", result: "L"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "W"},
//     //...
//   ]

function superbowlWin(record){
    let winningRecord = record.find((gameObject) => {
      return gameObject.result === "W"
    })
    // return winningRecord.year ;
    if (winningRecord === undefined) {
        return undefined     
    } else {
        return winningRecord.year 
    }
}