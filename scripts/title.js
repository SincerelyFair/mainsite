var i=0;
setInterval(function(){
    var titles=[

"n",
"ny",
"nyc",
"nyct",
"nycto",
"nyctop",
"nyctoph",
"nyctophi",
"nyctophil",
"nyctophile",
"nyctophile.c",
"nyctophile.cf",
"nyctophile.c",
"nyctophile.",
"nyctophile",
"nyctophil",
"nyctophi",
"nyctoph",
"nyctop",
"nycto",
"nyct",
"nyc",
"ny",
"n",
]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);