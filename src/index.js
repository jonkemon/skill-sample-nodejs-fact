'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Morrison Trivia";              
var GET_FACT_MESSAGE = "Did you know?: ";
var HELP_MESSAGE = "You can say tell me a Morrison fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Evelyn has 96 nicknames, Booboo is her primary choice.",
    "Finnian and Evelyn. Daddy is your Father.",
    "Mummy and Daddy love each other very VERY much.",
    "Finnian is the fastest human on earth. His top speed is 497km per hour.",
    "Damascus is the 5th Morrison.",
    "Mummy is by far the best cook and driver in the Morrison house. Her food is also very kind to animals.",
    "The only thing better than a three quater Morrison family snuggle is a full family Morrison snuggle!",
    "Finnian had the best birthday party ever for his 6th birthday.",
    "We all love Bubba. Her favourite thing is when Evelyn plays with her hair and changes her clothing.",
    "Bearly Bear is very cool. His favourite band is Grand Daddy and he likes to rock!",
    "Finnian is a brilliant scientist. His experiments are usually fun and create all sorts of explosions and sticky goo!",
    "Moondust is the fastest heap of junk in the galaxy.",
    "Brekmust is the Morrison fambilys favourite meal. They eat all sorts of things in the morning from muesli to smoothies, toast and porridge.",
    "Daddy is the Porridge King.",
    "All Morrison family members know 'you must mind your surroundings'."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};