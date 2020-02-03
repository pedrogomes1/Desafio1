const { Router } = require('express')

const ProjectController = require('./controllers/ProjectsControllers');
const { checkId } = require('./middleware/checkId')
const routes = Router()


//Middleware global
routes.use((req, res, next) => {

  console.count('Numero total')
  
  return next()
})

routes.post('/projects', ProjectController.newProject)
routes.get('/projects', ProjectController.listProject)
routes.put('/projects/:id', checkId, ProjectController.updateProject)
routes.delete('/projects/:id', checkId, ProjectController.deleteProject)
routes.post('/projects/:id/task', checkId, ProjectController.newTask)

module.exports = routes;