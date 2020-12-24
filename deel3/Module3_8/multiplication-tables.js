for (let t = 1; t <= 10; t++) {
    let line = '';
    let space = '  ';

    for (let i = 1; i <= 10; i++) {
        calc = (t * i);

        if (t <= 9) {
            space += ' ';
        }
        if (i <= 9) {
            space += ' ';
        }
        if (calc <= 9) {
            space += ' ';
        }
        answer = t + ' x ' + i + ' = ' + calc + space;
        line = line + answer;
        space = ' ';
    };
    console.log(line);
};