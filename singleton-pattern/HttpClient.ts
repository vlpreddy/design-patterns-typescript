import fetch from 'node-fetch';

class HttpClient {
  private static instance: HttpClient;

  private constructor() {}

  static getInstance(): HttpClient {
    if (!HttpClient.instance) {
      HttpClient.instance = new HttpClient();
    }
    return HttpClient.instance;
  }

  get(url: string): Promise<any> {
    return fetch(url).then(response => response.json());
  }

  post(url: string, data: any): Promise<any> {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
}

const starwars = HttpClient.getInstance();
starwars.get('http://swapi.dev/api/people/1/').then(response => {
  console.log(response);
});