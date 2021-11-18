const main = async () => {
  const {default: fetch} = await import('node-fetch');

  // await fetch("https://hellomate.me/save-user-quiz", {
  //   "headers": {
  //     "accept": "application/json, text/plain, */*",
  //     "content-type": "application/x-www-form-urlencoded",
  //     "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": "\"Linux\"",
  //     "Referer": "https://hellomate.me/sync-quiz/68Px7?utm_site_source=getstart&utm_site_medium=sync-page&utm_site_campaign=user-friend",
  //     "Referrer-Policy": "strict-origin-when-cross-origin"
  //   },
  //   "body": "userFullName=test-15" +
  //     "&categoryId=1" +
  //     "&countryId=1" +
  //     "&quizId=2" +
  //     "&encUserQuizId=68Px7" +
  //     "&score=none" +
  //     "&maxScore=50" +
  //
  //     "&userQuestionId[0]=2" +
  //     "&userQuestionOptionId[0]=2" +
  //     "&userChQuestionOptionId[0]=2" +
  //
  //     "&userQuestionId[1]=21" +
  //     "&userQuestionOptionId[1]=129" +
  //     "&userChQuestionOptionId[1]=129" +
  //
  //     "&userQuestionId[2]=6" +
  //     "&userQuestionOptionId[2]=78" +
  //     "&userChQuestionOptionId[2]=78" +
  //
  //     "&userQuestionId[3]=3" +
  //     "&userQuestionOptionId[3]=75" +
  //     "&userChQuestionOptionId[3]=75" +
  //
  //     "&userQuestionId[4]=28" +
  //     "&userQuestionOptionId[4]=68" +
  //     "&userChQuestionOptionId[4]=68" +
  //
  //     "&userQuestionId[5]=26" +
  //     "&userQuestionOptionId[5]=138" +
  //     "&userChQuestionOptionId[5]=138" +
  //
  //     "&userQuestionId[6]=14" +
  //     "&userQuestionOptionId[6]=107" +
  //     "&userChQuestionOptionId[6]=107" +
  //
  //     "&userQuestionId[7]=18" +
  //     "&userQuestionOptionId[7]=112" +
  //     "&userChQuestionOptionId[7]=112" +
  //
  //     "&userQuestionId[8]=8" +
  //     "&userQuestionOptionId[8]=94" +
  //     "&userChQuestionOptionId[8]=94" +
  //
  //     "&userQuestionId[9]=19" +
  //     "&userQuestionOptionId[9]=119" +
  //     "&userChQuestionOptionId[9]=119" +
  //
  //     "&userQuestionId[10]=4" +
  //     "&userQuestionOptionId[10]=141" +
  //     "&userChQuestionOptionId[10]=141" +
  //
  //     "&userQuestionId[11]=12" +
  //     "&userQuestionOptionId[11]=38" +
  //     "&userChQuestionOptionId[11]=38" +
  //
  //     // changed upper
  //     "&userQuestionId[12]=23" +
  //     "&userQuestionOptionId[12]=136" +
  //     "&userChQuestionOptionId[12]=134" +
  //     // changed lower
  //     "&userQuestionId[13]=9" +
  //     "&userQuestionOptionId[13]=22" +
  //     "&userChQuestionOptionId[13]=23" +
  //     // changed both
  //     "&userQuestionId[14]=13" +
  //     "&userQuestionOptionId[14]=102" +
  //     "&userChQuestionOptionId[14]=102" +
  //     // added extra
  //     "&userQuestionId[15]=14" +
  //     "&userQuestionOptionId[15]=107" +
  //     "&userChQuestionOptionId[15]=107" +
  //     // added extra
  //     "&userQuestionId[16]=14" +
  //     "&userQuestionOptionId[16]=107" +
  //     "&userChQuestionOptionId[16]=107" +
  //     // added extra
  //     "&userQuestionId[17]=14" +
  //     "&userQuestionOptionId[17]=107" +
  //     "&userChQuestionOptionId[17]=107" +
  //     // added extra
  //     "&userQuestionId[18]=14" +
  //     "&userQuestionOptionId[18]=107" +
  //     "&userChQuestionOptionId[18]=107" +
  //     // added extra
  //     "&userQuestionId[19]=14" +
  //     "&userQuestionOptionId[19]=107" +
  //     "&userChQuestionOptionId[19]=107" +
  //   // // added random
  //   // "&userQuestionId[16]=27" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // // added random
  //   // "&userQuestionId[17]=29" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // // added random
  //   // "&userQuestionId[18]=30" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // // added random
  //   // "&userQuestionId[19]=31" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // // added random
  //   // "&userQuestionId[20]=32" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // // added random
  //   // "&userQuestionId[21]=33" +
  //   // "&userQuestionOptionId[16]=172" +
  //   // "&userChQuestionOptionId[16]=172" +
  //   // added random
  //   "&userQuestionId[22]=34" +
  //   "&userQuestionOptionId[16]=172" +
  //   "&userChQuestionOptionId[16]=172",
  //   "method": "POST"
  // });
};

main()


var arrQuizDetail = {
  "id": "2",
  "name": "English12",
  "typeId": "1",
  "maxQuestion": "15",
  "questions": [{
    "questionId": "2",
    "correctOptionId": "0",
    "question": "Which is your B\u2019day month?",
    "questionType": 1,
    "optionType": 1,
    "options": [
      {"questionOptionId": "2", "type": "1", "content": "January"}, {
      "questionOptionId": "3",
      "type": "1",
      "content": "February"
    }, {"questionOptionId": "5", "type": "1", "content": "March"}, {
      "questionOptionId": "7",
      "type": "1",
      "content": "April"
    }, {"questionOptionId": "9", "type": "1", "content": "May"}, {
      "questionOptionId": "11",
      "type": "1",
      "content": "June"
    }, {"questionOptionId": "12", "type": "1", "content": "July"}, {
      "questionOptionId": "13",
      "type": "1",
      "content": "August"
    }, {"questionOptionId": "15", "type": "1", "content": "September"}, {
      "questionOptionId": "17",
      "type": "1",
      "content": "October"
    }, {"questionOptionId": "18", "type": "1", "content": "November"}, {
      "questionOptionId": "20",
      "type": "1",
      "content": "December"
    }],
    "inDirectQuestion": "Which is {USERNAME}\u2019s B\u2019day month?"
  }, {
    "questionId": "21",
    "correctOptionId": "0",
    "question": "Are you a dog person or a cat person?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "129",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/dog.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Dog person<\/figcaption>"
    }, {
      "questionOptionId": "130",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/cat.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Cat person<\/figcaption>"
    }, {
      "questionOptionId": "132",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/both.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Both of them<\/figcaption>"
    }],
    "inDirectQuestion": "Is {USERNAME} a dog person or a cat person?"
  }, {
    "questionId": "6",
    "correctOptionId": "0",
    "question": "What is your favourite colour?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "78",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Red2.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Red<\/figcaption>"
    }, {
      "questionOptionId": "80",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Blue2.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Blue<\/figcaption>"
    }, {
      "questionOptionId": "82",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Pink5.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Pink<\/figcaption>"
    }, {
      "questionOptionId": "84",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Yellow9.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Yellow<\/figcaption>"
    }, {
      "questionOptionId": "86",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Green3.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Green<\/figcaption>"
    }, {
      "questionOptionId": "88",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Black1.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Black<\/figcaption>"
    }, {
      "questionOptionId": "90",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/white8.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>White<\/figcaption>"
    }, {
      "questionOptionId": "91",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Puple6.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Purple<\/figcaption>"
    }, {
      "questionOptionId": "92",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Orange4.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Orange<\/figcaption>"
    }],
    "inDirectQuestion": "What is {USERNAME}\u2019s favourite colour?"
  }, {
    "questionId": "3",
    "correctOptionId": "0",
    "question": "What do you use the most?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "75",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Facebook1.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Facebook<\/figcaption>"
    }, {
      "questionOptionId": "76",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/instagram2.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Instagram<\/figcaption>"
    }],
    "inDirectQuestion": "What does {USERNAME} use the most?"
  }, {
    "questionId": "28",
    "correctOptionId": "0",
    "question": "If you had one wish, what would it be?",
    "questionType": 1,
    "optionType": 1,
    "options": [{"questionOptionId": "68", "type": "1", "content": "Unlimited food"}, {
      "questionOptionId": "70",
      "type": "1",
      "content": "To be a billionaire"
    }, {"questionOptionId": "72", "type": "1", "content": "Have superpowers"}, {
      "questionOptionId": "73",
      "type": "1",
      "content": "To be best at everything"
    }],
    "inDirectQuestion": "If {USERNAME} had one wish, what would it be?"
  }, {
    "questionId": "26",
    "correctOptionId": "0",
    "question": "Do you like an Android phone or iPhone?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "138",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/android.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Android phone<\/figcaption>"
    }, {
      "questionOptionId": "140",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/iphone.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>iPhone<\/figcaption>"
    }],
    "inDirectQuestion": "Does {USERNAME} like an Android phone or iPhone?"
  }, {
    "questionId": "14",
    "correctOptionId": "0",
    "question": "What are your favorite kind of flowers?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "107",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/roses.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Bunch of Roses<\/figcaption>"
    }, {
      "questionOptionId": "108",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/orchid.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Orchids<\/figcaption>"
    }, {
      "questionOptionId": "109",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/tulip.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Tulips<\/figcaption>"
    }, {
      "questionOptionId": "110",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/lilies.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Lilies<\/figcaption>"
    }],
    "inDirectQuestion": "What are {USERNAME}\u2019s favorite kind of flowers?"
  }, {
    "questionId": "18",
    "correctOptionId": "0",
    "question": "What is your eye color?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "112",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Black.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Black<\/figcaption>"
    }, {
      "questionOptionId": "113",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Blue.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Blue<\/figcaption>"
    }, {
      "questionOptionId": "115",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Hazel.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Hazel<\/figcaption>"
    }, {
      "questionOptionId": "116",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Green.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Green<\/figcaption>"
    }, {
      "questionOptionId": "118",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Brown.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Brown<\/figcaption>"
    }],
    "inDirectQuestion": "What is {USERNAME}\u2019s eye color?"
  }, {
    "questionId": "8",
    "correctOptionId": "0",
    "question": "What do you prefer?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "94",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Tea.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Tea<\/figcaption>"
    }, {
      "questionOptionId": "95",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Cofee.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Coffee<\/figcaption>"
    }],
    "inDirectQuestion": "What does {USERNAME} prefer?"
  }, {
    "questionId": "19",
    "correctOptionId": "0",
    "question": "What do you like to do in free time?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "119",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/prefer-sleeping.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Prefer Sleeping<\/figcaption>"
    }, {
      "questionOptionId": "120",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/love-shopping.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Love shopping<\/figcaption>"
    }, {
      "questionOptionId": "122",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/watching-tv.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Watching TV<\/figcaption>"
    }, {
      "questionOptionId": "123",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/road-trip.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Go for a Road trip<\/figcaption>"
    }, {
      "questionOptionId": "125",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Ride-a-bicycle.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Ride a bicycle<\/figcaption>"
    }, {
      "questionOptionId": "126",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/play-a-game.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Play a game<\/figcaption>"
    }, {
      "questionOptionId": "128",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Call-family-and-friends-.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Call family and friends<\/figcaption>"
    }],
    "inDirectQuestion": "What does {USERNAME} like to do in free time?"
  }, {
    "questionId": "4",
    "correctOptionId": "0",
    "question": "What is more important to you?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "141",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/family1.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Family and friends<\/figcaption>"
    }, {
      "questionOptionId": "142",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Money.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Money<\/figcaption>"
    }, {
      "questionOptionId": "144",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Love.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Love<\/figcaption>"
    }, {
      "questionOptionId": "146",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Career.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Career<\/figcaption>"
    }],
    "inDirectQuestion": "What is more important to {USERNAME}?"
  }, {
    "questionId": "12",
    "correctOptionId": "0",
    "question": "What excites you more?",
    "questionType": 1,
    "optionType": 1,
    "options": [{"questionOptionId": "38", "type": "1", "content": "Expressing Feelings"}, {
      "questionOptionId": "39",
      "type": "1",
      "content": "Watching Favorite Movie"
    }, {"questionOptionId": "40", "type": "1", "content": "Rain"}, {
      "questionOptionId": "42",
      "type": "1",
      "content": "Yummy Food"
    }, {"questionOptionId": "43", "type": "1", "content": "Adventure Sports"}, {
      "questionOptionId": "45",
      "type": "1",
      "content": "Travelling"
    }],
    "inDirectQuestion": "What excites {USERNAME} more?"
  }, {
    "questionId": "23",
    "correctOptionId": "0",
    "question": "Which one will you choose?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "134",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/mountain.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Mountains<\/figcaption>"
    }, {
      "questionOptionId": "136",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/beach.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Beach<\/figcaption>"
    }],
    "inDirectQuestion": "Which one will {USERNAME} choose?"
  }, {
    "questionId": "9",
    "correctOptionId": "0",
    "question": "How many relationships did you had?",
    "questionType": 1,
    "optionType": 1,
    "options": [{"questionOptionId": "22", "type": "1", "content": "None"}, {
      "questionOptionId": "23",
      "type": "1",
      "content": "One"
    }, {"questionOptionId": "24", "type": "1", "content": "Two"}, {
      "questionOptionId": "26",
      "type": "1",
      "content": "Three"
    }, {"questionOptionId": "28", "type": "1", "content": "Four"}],
    "inDirectQuestion": "How many relationships did {USERNAME} had?"
  }, {
    "questionId": "13",
    "correctOptionId": "0",
    "question": "Which is your favorite smartphone brand?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "97",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/samsung.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Samsung<\/figcaption>"
    }, {
      "questionOptionId": "99",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/Apple.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Apple<\/figcaption>"
    }, {
      "questionOptionId": "100",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/oneplus.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>OnePlus<\/figcaption>"
    }, {
      "questionOptionId": "102",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/sony.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Sony<\/figcaption>"
    }, {
      "questionOptionId": "104",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/Hellomate\/xiaomi.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Xiaomi<\/figcaption>"
    }, {
      "questionOptionId": "515",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/WorldCupEng\/Other-than-this.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Other than this<\/figcaption>"
    }],
    "inDirectQuestion": "Which is {USERNAME}\u2019s favorite smartphone brand?"
  }, {
    "questionId": "17",
    "correctOptionId": "0",
    "question": "What is Love for you?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "55",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/Confusing.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Confusing<\/figcaption>"
    }, {
      "questionOptionId": "56",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/Worthwhile.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Worthwhile<\/figcaption>"
    }, {
      "questionOptionId": "58",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/Complex.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Complex<\/figcaption>"
    }, {
      "questionOptionId": "60",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/Everything.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>Everything<\/figcaption>"
    }],
    "inDirectQuestion": "What is Love for {USERNAME}?"
  }, {
    "questionId": "16",
    "correctOptionId": "0",
    "question": "How many kids do you want?",
    "questionType": 1,
    "optionType": 1,
    "options": [{"questionOptionId": "47", "type": "1", "content": "One"}, {
      "questionOptionId": "48",
      "type": "1",
      "content": "Two"
    }, {"questionOptionId": "49", "type": "1", "content": "Three"}, {
      "questionOptionId": "51",
      "type": "1",
      "content": "Four"
    }, {"questionOptionId": "53", "type": "1", "content": "None"}],
    "inDirectQuestion": "How many kids does {USERNAME} want?"
  }, {
    "questionId": "25",
    "correctOptionId": "0",
    "question": "How much do you rate yourself in terms of IQ?",
    "questionType": 1,
    "optionType": 1,
    "options": [{
      "questionOptionId": "61",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/6-out-of-10.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>6 out of 10<\/figcaption>"
    }, {
      "questionOptionId": "63",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/8-out-of-10.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>8 Out of 10<\/figcaption>"
    }, {
      "questionOptionId": "64",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/9-out-of-10.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>9 Out of 10<\/figcaption>"
    }, {
      "questionOptionId": "66",
      "type": "2",
      "content": "<html>\r\n<head>\r\n <title><\/title>\r\n<\/head>\r\n<body autocomplete=\"off\">\r\n<div class=\"img_ser\"><img alt=\"\" src=\"https:\/\/img.theshookers.com\/public\/site_content\/quiz\/ck_editor\/images\/English3\/10-out-of-10.jpg\"><\/div>\r\n<\/body>\r\n<\/html>\r\n<figcaption>10 Out of 10<\/figcaption>"
    }],
    "inDirectQuestion": "How much do you rate {USERNAME} in terms of IQ?"
  }, {
    "questionId": "11",
    "correctOptionId": "0",
    "question": "According to you, the best quality in a person is?",
    "questionType": 1,
    "optionType": 1,
    "options": [{"questionOptionId": "29", "type": "1", "content": "Openness"}, {
      "questionOptionId": "30",
      "type": "1",
      "content": "Maturity"
    }, {"questionOptionId": "31", "type": "1", "content": "Loyalty"}, {
      "questionOptionId": "32",
      "type": "1",
      "content": "Sense of humor"
    }, {"questionOptionId": "34", "type": "1", "content": "Empathy"}, {
      "questionOptionId": "36",
      "type": "1",
      "content": "Affection"
    }],
    "inDirectQuestion": "According to {USERNAME}, the best quality in a person is?"
  }]
};

console.log(arrQuizDetail.questions.length)
