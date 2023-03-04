const express = require('express')
var router = express.Router();
const { getBuffer } = require('../lib/function')
const axios = require('axios')
const fetch = require('node-fetch')
const fs = require('fs')
var hikkiMe = require("hikki-me")
__path = process.cwd()

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}




router.get('/dana10k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   axios.get(`https://api.countapi.xyz/hit/topup.pinostore.my.id`)
  
	var waif = await hikkiMe.payment.convertSaldo(36, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/dana20k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(37, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

router.get('/dana25k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(38, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana50k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(39, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana75k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(40, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana100k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(41, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana150k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(42, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana200k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(43, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana250k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(73, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana300k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(74, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})
router.get('/dana300k', async(req, res) => {
  var nomorhp = req.query.nomorhp
	if (!nomorhp) return res.json({ message: 'Masukan parameter nomorhp?=0895...'})
   
	var waif = await hikkiMe.payment.convertSaldo(78, nomorhp)


try {
		res.json({
      creator: `pinostore.my.id`,
      respon: {
              order_id: waif.order_id,
              tagihan: waif.tagihan,
              time: waif.time,
              rrn: waif.RRN,
              product: waif.product,
              pembayaran_qris: waif.img
              
              }
      })
	} catch(err) {
		console.log(err)
		res.json({ message: 'Ups, error' })
	}
})

module.exports = router
