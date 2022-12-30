const callSuccess = (req, res) => {
  res.json({
    data: 'success'
  });
};

module.exports = {
  callSuccess,
};
