const express = require('express');
const router = express.Router();
const companies = require('../data/dummydata.json');

// get all companies
router.get('/', (req, res) => {
  res.json(companies);
});

router.get('/ticker/:ticker', (req, res) => {
  const company = companies.find(
    (c) => c.ticker.toLowerCase() === req.params.ticker.toLowerCase()
  );
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
});

router.get('/cik/:cik', (req, res) => {
  const company = companies.find((c) => c.cik === req.params.cik);
  if (!company) return res.status(404).json({ error: 'Company not found' });
  res.json(company);
});

router.get('/exchange/:exchange', (req, res) => {
  const results = companies.filter(
    (c) => c.exchange.toLowerCase() === req.params.exchange.toLowerCase()
  );
  if (results.length === 0)
    return res.status(404).json({ error: 'Companies not found' });
  res.json(results);
});

module.exports = router;
