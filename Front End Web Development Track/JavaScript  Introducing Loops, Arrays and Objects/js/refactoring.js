//var html = '';
//var red;
//var green;
//var blue;
//var rgbColor;
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//red = Math.floor(Math.random() * 256 );
//green = Math.floor(Math.random() * 256 );
//blue = Math.floor(Math.random() * 256 );
//rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//html += '<div style="background-color:' + rgbColor + '"></div>';
//
//document.write(html);


var html = '';
var rgbColor;

function randomRgb ( color ) {
    return Math.floor(Math.random() * 256 );
}

function randomColor() {
    var color = 'rgb(';
    color += randomRgb() + ',';
    color += randomRgb() + ',';
    color += randomRgb() + ')';
    return color;
}

function print(message) {
    document.write(message);
}

for ( i = 1; i <= 10; i += 1 ) {
    rgbColor = randomColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}
print(html);



