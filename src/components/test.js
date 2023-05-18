/**
 * The function filters active clients and sends them an email.
 * @param clients - an array of client objects, where each object represents a client and contains
 * information such as their name, email address, and whether they are an active client or not.
 */
function emailActiveClients(clients) {
  clients.filter(isActiveClient).forEach(email);
}

/**
 * The function checks if a given client is active in a database.
 * @param client - The parameter "client" is a variable that represents the name or identifier of a
 * client that we want to check if it is active or not.
 * @returns The function `isActiveClient` is returning a boolean value indicating whether the client
 * passed as an argument is active or not. The value is determined by calling the `isActive()` method
 * on the client record retrieved from the database.
 */
function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}