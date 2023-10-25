import { Router } from 'express'

const router = Router()

router.get('/create-checkout-session', (req, res) => {
    res.json({ status: 'success', message: 'checkout' })
})
router.get('/sucess', (req, res) => res.send('success'))
router.get('/cancel', (req, res) => res.send('cancel'))

export default router