const { Router } = require('express')

const ProjectController = require('./controllers/ProjetcsControllers');
const { projects } = require('./controllers/ProjetcsControllers')

const routes = Router()

//Middleware global
routes.use((req, res, next) => {

  console.count('Numero total')
  
  return next()
})

//Middleware local
function checkId(req, res, next)  {

  const { id } = req.params

  const project = projects.find(project => project.id == id)

  if(!project){
    return res.json({error: 'Erro, id not found'})
  }
  
  next()
}

routes.get('/', (req, res) => {
  return res.json({message:'Foi'})
})

routes.post('/projects', ProjectController.newProject)
routes.get('/projects', ProjectController.listProject)
routes.put('/projects/:id', checkId, ProjectController.updateProject)
routes.delete('/projects/:id', checkId, ProjectController.deleteProject)
routes.post('/projects/:id/task', checkId, ProjectController.newTask)

module.exports = routes;