const apiUrl = {
  devUrl: 'http://8b40f9235c0e.ngrok.io',
  prodUrl: 'https://salyd-server.herokuapp.com/',
};

export const url = apiUrl.devUrl ? apiUrl.devUrl : apiUrl.prodUrl;
