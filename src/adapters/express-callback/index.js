const express = require("express");

module.exports = function makeExpressCallback(controllers) {
  /**
   * @param {express.Request} req
   * @param {express.Response} res
   */
  return (req, res) => {
    let additional = {};
    const httpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
      path: req.path,
      headers: {
        "Content-Type": req.get("Content-Type"),
      },
      ...additional,
    };
    controllers(httpRequest)
      .then((httpResponse) => {
        if (httpResponse.headers) {
          res.set(httpResponse.headers);
        }

        res.status(httpResponse.statusCode).send(httpResponse.body);
      })
      .catch((e) => {
        console.log(e);
        res.status(500).send({ error: "An unknown error occured." });
      });
  };
};
