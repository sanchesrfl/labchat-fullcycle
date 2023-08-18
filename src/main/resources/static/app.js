const stompClient = new StompJs.Client({
    brokerURL: 'ws://localhost:8080/gs-guide-websocket'
});

var username = "";


stompClient.onConnect = (frame) => {
    setConnected(true);
    console.log('Connected: ' + frame);
    sendWelcomeMessage(username);
    atualizarLista();
    stompClient.subscribe('/topic/greetings', (greeting) => {
        showGreeting(greeting.body);
    });

    stompClient.subscribe('/usuarios', (greeting) => {
            console.log(greeting.body);
        });
};

stompClient.onWebSocketError = (error) => {
    console.error('Error with websocket', error);
};

stompClient.onStompError = (frame) => {
    console.error('Broker reported error: ' + frame.headers['message']);
    console.error('Additional details: ' + frame.body);
};

function setConnected(connected) {
    $("#connect").prop("disabled", connected);

    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

async function connect() {
    username = $("#name").val();
    await stompClient.activate();
}
async function sendWelcomeMessage(username){
    stompClient.publish({
                    destination: "/app/user-connected",
                    body: JSON.stringify(username)
                });
}

function disconnect() {
    stompClient.deactivate();
    setConnected(false);
    console.log("Disconnected");
}

function sendMessage() {
    stompClient.publish({
        destination: "/app/chat",
        body: JSON.stringify({'from': username,'message': $("#message").val()})
    });
    $('#message').val('');
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message +"</td></tr>");
}

$(function () {
    $("form").on('submit', (e) => e.preventDefault());
    $( "#connect" ).click(() => connect());
    $( "#disconnect" ).click(() => disconnect());
    $( "#send" ).click(() => sendMessage());
});