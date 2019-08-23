// replace these values with those generated in your TokBox Account
var apiKey = "45828062";
var sessionId = "1_MX40NTgyODA2Mn5-MTU2NjU1ODc1NTY0OH5sUFN2SCtabE1Lc0krUkRrWk9NamViNTN-UH4";
var token = "T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MTE3Y2JlYmI4ZWIxY2ExN2ZhZjI3NTZjN2NmZjMxZmE0MjAxNTQxYzpzZXNzaW9uX2lkPTFfTVg0ME5UZ3lPREEyTW41LU1UVTJOalUxT0RjMU5UWTBPSDVzVUZOMlNDdGFiRTFMYzBrclVrUnJXazlOYW1WaU5UTi1VSDQmY3JlYXRlX3RpbWU9MTU2NjU1ODc4MyZub25jZT0wLjk4MTI4ODY5Mzg4ODg5Mzgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU2NjY0NTE4Mw==";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream

    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }