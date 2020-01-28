POST /action_name HTTP/1.1
Accept: application/json, */*
Content-Length: 400
Content-Type: application/json
Host: builder.open.co.kr
Authorization: token TOKEN_STRING


{
    "version": "2.0",
    "action": {
        "actionName": "{{string}}",
        "parameters": {
            KEY: {
                "type": "{{string}}",
                "value": VALUE
            }
        }
    }
    "context": {
        "accessToken": "{{string}}",
        "device": {
            "type": "{{string}}",
            "state": {
                KEY: VALUE
            }
        },
        "supportedInterfaces": {
            "AudioPlayer": {
                "playerActivity": "PLAYING",
                "token": "string value",
                "offsetInMilliseconds": 100000
            }  
        },
        "privatePlay" : { } // reserved
    }
}
