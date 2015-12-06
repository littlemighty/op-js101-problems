// problem 1 #multiples
$(document).ready(function() {
    $('#p1button').click(function(event) {
        var number = + $('#multiples').val();
        var sum = 0;

        for (i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            };
        };
        $('#answer1').text(sum);
    });

// problem 2 #fabonacci
    $('#p2button').click(function(event) {
        var number = + $('#fibonacci').val();
        var sum = 0;
        var x = 0;
        var y = 1;
        var z = 0;
        while(z < number) {
            z = x + y;
            x = y;
            y = z;
            if(z % 2 === 0) {
                sum += z;
            };
        };
        $('#answer2').text(sum);
    });

//problem 3 #prime-factor
    $('#p3button').click(function(event) {
        var number = $('#prime-factor').val();
        var i;
        for (i = 2; i < number; i++) {
            if (number % i === 0) {
                number /= i;
            };
        };
        $('#answer3').text(i);
    });
});