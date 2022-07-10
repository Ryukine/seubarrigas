module.exports = (app) => {
  const findAll = (req, res) => {
    app.services.user.findAll()
      .then((result) => res.status(200).json(result));
  };

  const create = async (req, res) => {
    const result = await app.services.user.save(req.body); // Quando Passado um segundo parâmetro no Knex é para informar qual é o retorno daquela Execução (não funciona no MySQL)
    if (result.error) return res.status(400).json(result);

    res.status(201).json(result[0]);
  };

  return { findAll, create };
};
