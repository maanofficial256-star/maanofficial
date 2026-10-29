module.exports = (req, res) => {
  res.json({
    creator: "maan official",
    status: true,
    message: "API Maan aktif!",
    endpoints: "/api/index.js"
  });
}
