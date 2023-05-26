export const survey = {
  // Type:   Request
  // Path:   survey
  // Rule:   ???
  // Return: [
  // Return:   [ {What is your marital status?: 'Single'}, {Are you planning on getting married next year?: 'Yes/No'}  ],
  // Return:   [ {What is your marital status?: 'Married'},   ],
  // Return: ]
  type: "request",
  question: "What is your marital status?",
  responses: [
    {
      answer: "Single",
      next: {
        // Type:   Request
        // Path:   survey.responses[0].next
        // Rule:   1
        // Return: {Are you planning on getting married next year?: 'Yes/No'}
        type: "request",
        question: "Are you planning on getting married next year?",
        responses: [
          { 
            type: "response",
            answer: "Yes",
            next: null
          },
          {
            type: "response",
            answer: "No",
            next: null
          },
        ],
      },
    },
    {
      answer: "Married",
      next: {
        // Type:   Request
        // Path:   survey.responses[1].next
        // Rule:   2
        // Return: [
        // Return:   [{How long have you been married?: 'Less than a year'}],
        // Return:   [{How long have you been married?: 'More than a year'}, {Have you celebrated your one year anniversary?: 'Yes/No'}]
        // Return: ]
        type: "request",
        question: "How long have you been married?",
        responses: [
          { 
            type: "response",
            answer: "Less than a year",
            next: null,
          },
          {
            type: "response",
            answer: "More than a year",
            next: {
              // Type:   Request
              // Path:   survey.responses[1].next.responses[1].next
              // Rule:   1
              // Return: {Have you celebrated your one year anniversary?: 'Yes/No'}
              type: "request",
              question: "Have you celebrated your one year anniversary?",
              responses: [
                { 
                  type: "response",
                  answer: "Yes",
                  next: null
                },
                {
                  type: "response",
                  answer: "No",
                  next: null
                },
              ],
            },
          },
        ],
      },
    },
  ],
};
