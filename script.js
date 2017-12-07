
var horoscopes = ["Aquarius: You're temperamental, uncompromising, aloof, just an all round loner","Pisces: Fearful, overly trusting, sad, desire to escape reality, you always get screwed over and you can't or don't want to stop it",
"Aries: Impatient, moody, short-tempered, impulsive, aggressive, you love to argue even if it means you no longer have friends","Taurus: Stubborn, possessive, uncompromising, you could take some advice from Frozen: just let it go",
"Gemini: Nervous, inconsistent, indecisive, for gods sake have a word with yourself","Cancer: Moody, pessimistic, suspicious, manipulative, insecure basically that one Ex, you know the one (hint it's you)","Leo: Creative, passionate, generous, warm-hearted, cheerful, humorous, like me you da best",
    "Virgo; Shyness, overly critical of self and others, all work and no play, you are boring",
"Libra: Indecisive, avoids confrontations, will carry a grudge, self-pity, you're the one who mumbles under their breath when angry","Scorpio: Distrusting, jealous, secretive, violent, the other Ex",
"Sagittarius: Promises more than can deliver, very impatient, will say anything no matter how undiplomatic, the guy who screws over said Aquarius","Capricorn: Know-it-all, unforgiving, condescending, expecting the worst, you're just bad, period."];
var sign = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];

function doIt(){
    var birth = parseInt(document.getElementById("birth").value);
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var sign = determineSign(day,month);
    var name = document.getElementById("name").value;
    determineHoroscope(sign);
    console.log(month);
    console.log(day);
    console.log(determineSign(day,month));
    console.log(determineHoroscope(determineSign(day,month)));
    document.getElementById("sign").innerHTML = NAME(name,sign) + determineHoroscope(sign);
    document.getElementById("image").innerHTML = "<img src ='img/" + sign + ".jpg'>";
    document.getElementById("name").innerHTML = NAME(name,sign);
    document.getElementById("Zodiac").innerHTML = " My dude your zodiac is a " + Chinese(birth);
}

function determineSign(day,month){
    if (month === 1 && day >= 20 && day <= 31){
        return sign[0];
    }
    if (month === 2 && day >= 1 && day <= 18){
        return sign[0];
    }
    if (month === 2 && day >= 19 && day <= 29){
        return sign[1];
    }
    if (month === 3 && day >= 1 && day <= 20){
        return sign[1];
        }
    if (month === 3 && day >= 21 && day <= 31){
        return [2];
    }
    if (month === 4 && day >= 1 && day <= 19){
            return sign[2];
        }
    if (month === 4 && day >= 20 && day <= 30){
        return sign[3];
    }
    if (month === 5 && day >= 1 && day <= 20){
            return sign[3];
        }
    if (month === 5 && day >= 21 && day <= 31) {
        return [4];
    }
    if (month === 6 && day >= 1 && day <= 20){
            return sign[4];
        }
    if (month === 6 && day >= 21 && day <= 30) {
        return sign[5];
    }
    if (month === 7 && day >= 1 && day <= 22){
            return sign[5];
        }
    if (month === 7 && day >= 23 && day <= 31) {
        return sign[6];
    }
    if (month === 8 && day >= 1 && day <= 22) {
            return sign[6];
        }
    if (month === 8 && day >= 23 && day <= 31) {
        return sign[7];
    }
    if (month === 9 && day >= 1 && day <= 22){
            return sign[7];
        }
    if (month === 9 && day >= 23 && day <= 30) {
        return sign[8]
    }
    if (month === 10 && day >= 1 && day <= 22){
            return sign[8];
        }
    if (month === 10 && day >= 23 && day <= 31) {
        return sign[9];
    }
    if (month === 11 && day >= 1 && day <= 21){
            return sign[9];
        }
    if (month === 11 && day >= 22 && day <= 31) {
        return [10];
    }
    if (month === 12 && day >= 1 && day <= 21){
            return sign[10];
        }
    if (month === 12 && day >= 22 && day <= 31) {
        return sign[11];
    }
    if (month === 1 && day >= 1 && day <= 19){
            return sign[11];
        }
}
function determineHoroscope(horoscope){
    if (horoscope == sign[0]){
        return horoscopes[0];
    }
    if (horoscope == sign[1]){
        return horoscopes[1];
    }
    if (horoscope == sign[2]){
        return horoscopes[2];
    }
    if (horoscope == sign[3]){
        return horoscopes[3];
    }
    if (horoscope == sign[4]){
        return horoscopes[4];
    }
    if (horoscope == sign[5]){
        return horoscopes[5];
    }
    if (horoscope == sign[6]){
        return horoscopes[6];
    }
    if (horoscope == sign[7]){
        return horoscopes[7];
    }
    if (horoscope == sign[8]){
        return horoscopes[8];
    }
    if (horoscope == sign[9]){
        return horoscopes[9];
    }
    if (horoscopes == sign[10]){
        return horoscopes[10];
    }
    if (horoscope == sign[11]){
        return horoscopes[11];
    }
    return "That date doesn't exist idiot";
}

var Zodiacs = ["Rat","Ox","Tiger","Rabbit","Dragon","Snake","Horse","Ram","Monkey","Rooster","Dog","Pig"];
function Chinese(birth){
    if (birth == 12 || birth == 24 || birth == 36 || birth == 48){
        return Zodiacs[0];
    }
    if (birth == 11 || birth == 23 || birth == 35 || birth == 47){
        return Zodiacs[1];
    }
    if (birth == 10 || birth == 22 || birth == 34 || birth == 46){
        return Zodiacs[2];
    }7
    if (birth == 9 || birth == 21 || birth == 33 || birth == 45){
        return Zodiacs[3];
    }
    if (birth == 8 || birth == 20 || birth == 32 || birth == 44){
        return Zodiacs[4];
    }
    if (birth == 7 || birth == 19 || birth == 31 || birth == 43){
        return Zodiacs[5];
    }
    if (birth == 6 || birth == 18 || birth == 30 || birth == 42 || birth == 54){
        return Zodiacs[6];
    }
    if (birth == 5 || birth == 17 || birth == 29 || birth == 41 || birth == 53){
        return Zodiacs[7];
    }
    if (birth == 4 || birth == 16 || birth == 28 || birth == 40 || birth == 52){
        return Zodiacs[8];
    }
    if (birth == 3 || birth == 15 || birth == 27 || birth == 39 || birth == 51){
        return Zodiacs[9];
    }
    if (birth == 2 || birth == 14 || birth == 26 || birth == 38 || birth == 50){
        return Zodiacs[10];
    }
    if (birth == 1 || birth == 13 || birth == 25 || birth == 37 || birth == 49){
        return Zodiacs[11];
    }
    return "Date Not Found";
}
function NAME(name){
    if (name){
        return "Yo whats good " + name +  ". You are a ";
    }
}
