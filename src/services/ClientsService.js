import { clientsData } from "../data/FakeData";
import ClientsModel from "../model/ClientsModel";

class ClientsService {
  constructor() {
    this.clients = clientsData;
  }

  getAll() {
    return this.clients;
  }

  getById(id) {
    return this.clients.find((client) => client.id_client === id);
  }

  add(client) {
    this.clients.push(client);
  }

  remove(id) {
    this.clients = this.clients.filter(
      (client) => client.id_client !== id
    );
  }

  update(updatedClient) {
    this.clients = this.clients.map((client) =>
      client.id_client === updatedClient.id_client ? updatedClient : client
    );
  }
}

export default new ClientsService();