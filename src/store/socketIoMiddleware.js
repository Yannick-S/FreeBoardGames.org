var socket = io();
var middlewareDispatch = null;
var auth_token = null;
var last_join = null;
var ackCount = 0;

let dispatchAckCount = (dispatch, count) => {
  if (dispatch) {
    dispatch({type: 'SOCKET_ACK_COUNT', count: count});
  }
}

let receivedAck = () => {
  ackCount--;
  dispatchAckCount(middlewareDispatch, ackCount);
}

socket.on('socketIoMiddleware', (message) => {
  if (middlewareDispatch) {
    message.FROM_SERVER = true;
    middlewareDispatch(message);
  }
});
socket.on('connect', () => {
});
socket.on('disconnect', () => {
  middlewareDispatch({type: 'SOCKET_DISCONNECT'});
});
socket.on('reconnect', () => {
  middlewareDispatch({type: 'SOCKET_RECONNECT'});
  socket.emit('login', auth_token);
  if (last_join) {
    socket.emit('socketIoMiddleware', last_join);
  }
});

export default (middlewareAPI) => (next) => (action) => {
  if (action.type == 'AUTH_SUCCESS') {
    auth_token = action.payload.token;
    socket.emit('login', auth_token);
  }
  if (action.type.indexOf('_REQUEST') > -1 &&
      !action.FROM_SERVER) {
    ackCount++;
    dispatchAckCount(middlewareDispatch, ackCount);
    socket.emit('socketIoMiddleware', action, receivedAck);
  }
  if (action.type.indexOf('JOIN_') > -1 &&
      !action.FROM_SERVER) {
    last_join = action;
  }
  if (action.type.indexOf('LEAVE_') > -1 &&
      !action.FROM_SERVER) {
    last_join = null;
  }
  middlewareDispatch = middlewareAPI.dispatch;
  return next(action);
}
