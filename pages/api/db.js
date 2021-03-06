import db from '../../db.json';

export default function dbHandler(request, response) {
  // configuracoes do servidor - inicio
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  response.setHeader('Access-Control-Allow-Credentials', true);
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  // fim

  response.json(db);
}
