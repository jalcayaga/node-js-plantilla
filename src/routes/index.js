import{Router} from 'express'
const router = Router()

// app.get('/', (req, res) => res.send('Hello, world'))
router.get('/', (req, res) => res.render('index', {title: 'Hello, world'}))
router.get('/pricing', (req, res) => res.render('pricing', {title: 'Hello, world'}))
router.get('/contact', (req, res) => res.render('contact', {title: 'Hello, world'}))

export default router