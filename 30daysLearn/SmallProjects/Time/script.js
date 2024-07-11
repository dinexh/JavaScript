document.getElementById('calculate').addEventListener('click', function() {
    const hours1 = parseInt(document.getElementById('hours1').value);
    const seconds1 = parseInt(document.getElementById('seconds1').value);
    const hours2 = parseInt(document.getElementById('hours2').value);
    const seconds2 = parseInt(document.getElementById('seconds2').value);

    const totalSeconds1 = (hours1 * 3600) + seconds1;
    const totalSeconds2 = (hours2 * 3600) + seconds2;

    const differenceInSeconds = Math.abs(totalSeconds1 - totalSeconds2);


    const differenceHours = Math.floor(differenceInSeconds / 3600);
    const differenceSeconds = differenceInSeconds % 3600;

    document.getElementById('result').innerHTML = `Difference: ${differenceHours} hours and ${differenceSeconds} seconds`;
});
