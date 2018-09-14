gRecordData = {
    Status: "NotStarted",
    AssessmentScore: "4",
    VisitedNumberOfPages: "0",
    LastVisitedPage: "", // UserSelectedOptionId will be used to jump to the unattempted question
  
    QuestionSequence: "Numbers", // this can be used later if different display style is required
    OptionSequence: "LowerAlphabets", // this can be used later if different display style is required
    RandomizeQuestions: true,
    RandomizeOptions: true,
    Questions: [
                    {
                        QuestionId: "1",
                        QuestionText: "What is the measure of the number of pixels in an image?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Resolution",
                                         "IsCorrect": true,
                                         "score": 2

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Format",
                                         "IsCorrect": false,
                                         
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Codec",
                                         "IsCorrect": false
                                     }

                        ],
                        IsAnswered:false,
                        CorrectFeedback: "That’s right.",
                        IncorrectFeedback: "​That’s not right. Resolution measures the number of pixels in an image.",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "2",
                        QuestionText: "Which tool would you use if you wanted to trim a half-inch from the left side of a digital photograph?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Trim",
                                         "IsCorrect": false

                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Resize",
                                         "IsCorrect": false
                                       

                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Crop",
                                         "IsCorrect": true,
                                         score: 2,

                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "That’s not right. You would use the Crop tool.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "3",
                        QuestionText: "Which of the following is a video file type?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": ".jpg",
                                         "IsCorrect": false
                                        
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": ".mov",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": ".mp3",
                                         "IsCorrect": false
                                        
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. Video file type is .mov.",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    },
                    {
                        QuestionId: "4",
                        QuestionText: "Which of the following is the best tool to use to fix the color of somebody’s eyes in a digital photograph?",
                        Options: [
                                     {
                                         "OptionId": "1",
                                         "OptionText": "Paint Brush",
                                         "IsCorrect": false
                                     },
                                     {
                                         "OptionId": "2",
                                         "OptionText": "Red Eye",
                                         "IsCorrect": true,
                                         score: 2
                                     },
                                     {
                                         "OptionId": "3",
                                         "OptionText": "Crop",
                                         "IsCorrect": false
                                        
                                     }

                        ],
                        IsAnswered:false,
                        IncorrectFeedback: "​That’s not right. The best tool is the Red Eye tool.​",
                        CorrectFeedback: "That’s right.​",
                        "UserSelectedOptionId": ""

                    }

    ]
}