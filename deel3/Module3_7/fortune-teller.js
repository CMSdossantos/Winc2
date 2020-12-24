const tellFortune = function(numOfChildren, partnerName, location, job) {
    let msg = 'Your going to be a ' + job + ' in ' + location + ', and married to ' + partnerName + ' with ' + numOfChildren + ' children';
    return console.log(msg);
}

tellFortune(3, 'Patricia' , 'france', 'carpenter');
tellFortune(1, 'John' , 'cuba', 'dance teacher');
tellFortune(2, 'Trump' , 'north-korea', 'vlogger');
