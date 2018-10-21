$('document').ready(() => {
    $('.networks .col-sm').css('height', $('window').height())
    //
    //
    function getInstaImages() {
        $.ajax({
            url: "daten/instafiles.txt",
            success: function(result) {
                var better = result.replace(/\[/g, "")
                better = better.replace(/\"/g, "")
                better = better.substring(0, better.length - 2)
                var sources = better.split(",")
                $("#instaLatest").html("")
                for (var i = sources.length - 1; i >= 0; i--) {
                    var newImg = document.createElement('img')
                    $(newImg).attr("src", sources[i])
                    $(newImg).attr("class", "insta-image")
                    $("#instaLatest").append(newImg);
                }
            }
        });
    }
    getInstaImages()
    setInterval(function() {
        getInstaImages()
    }, 5000);
    //
   /* $.ajax({
        url: "daten/tweets.txt",
        success: function(result) {
            console.log(result)
            var sources = result.split(",")
            console.log(sources)
            for (var i = sources.length - 1; i >= 0; i--) {
                var newText = document.createElement('p')
                console.log(newText)
                $(newText).text(sources[i])
                $("#twitterLatest").append(newText);
            }
        }
    });*/
    //
    $(function() {
        $('#timeline').timespace({
            timeType: 'date',
            useTimeSuffix: false,
            startTime: 0,
            endTime: 72,
            markerIncrement: 1,
            data: {
                headings: [{
                    start: 0,
                    end: 24,
                    title: 'Freitag'
                }, {
                    start: 25,
                    end: 48,
                    title: 'Samstag'
                }, {
                    start: 49,
                    title: 'Sonntag'
                }, ],
                events: [{
                    start: 15,
                    title: 'Anreise',
                    end: 17
                }, {
                    start: 17,
                    title: 'Begrüßung',
                    end: 18
                }, {
                    start: 18,
                    title: 'Abendessen',
                    end: 19
                }, {
                    start: 19,
                    title: 'Brainstorming',
                    end: 21.15
                }, {
                    start: 21.15,
                    title: 'Vortrag und Diskussion',
                    end: 23
                }, {
                    start: 23,
                    title: 'Bus fährt & Licht aus',
                    end: 25
                }, {
                    start: 24 + 7,
                    title: 'Frühstück im Hostel',
                    end: 24 + 8
                }, {
                    start: 24 + 8,
                    title: 'Fahrten zum, Theater',
                    end: 24 + 9
                }, {
                    start: 24 + 9,
                    title: 'Start für alle',
                    end: 24 + 9.50
                }, {
                    start: 24 + 9.50,
                    title: 'Gruppenfindung',
                    end: 24 + 12
                }, {
                    start: 24 + 12,
                    end: 24 + 13,
                    title: 'Lightningtalks'
                }, {
                    start: 24 + 13,
                    title: 'Mittag',
                    end: 24 + 14
                }, {
                    start: 24 + 14,
                    end: 24 + 18,
                    title: 'Lightningtalks'
                }, {
                    start: 24 + 18,
                    title: 'Abendessen',
                    end: 24 + 19
                }, {
                    start: 24 + 19,
                    title: 'Präsentationen üben',
                    end: 24 + 23
                }, {
                    start: 24 + 23,
                    title: 'Bus fährt & Licht aus',
                    end: 24 + 25
                }, {
                    start: 24 + 24 + 7,
                    title: 'Frühstück im Hostel',
                    end: 24 + 24 + 8
                }, {
                    start: 24 + 24 + 8,
                    title: 'Fahrten zum, Theater',
                    end: 24 + 24 + 9
                }, {
                    start: 24 + 24 + 9,
                    title: 'Start für alle',
                    end: 24 + 24 + 11
                }, {
                    start: 24 + 24 + 11,
                    title: 'Alle Projekte fertig',
                    end: 24 + 24 + 11.15
                }, {
                    start: 24 + 24 + 11.15,
                    title: 'Gäste und Presse eingetroffen',
                    end: 24 + 24 + 11.30
                }, {
                    start: 24 + 24 + 11.30,
                    title: 'Präsentaion der Projekte',
                    end: 24 + 24 + 14.30
                }, {
                    start: 24 + 24 + 14.30,
                    end: 24 + 24 + 14.45,
                    title: 'Verabschiedung'
                }, {
                    start: 24 + 24 + 14.45,
                    end: 24 + 24 + 24,
                    title: 'Abreise',
                    description: 'A period of global economic downturn. Many experienced unemployment and the basest poverty.'
                }, ]
            },
        }, function() {
            // Edit the navigation amount
            this.navigateAmount = 500;
        });
    });
})