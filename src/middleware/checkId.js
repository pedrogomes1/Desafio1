const { projects } = require('../controllers/ProjectsControllers');

module.exports = {
   checkId(req, res, next) {

    const { id } = req.params
  
    const project = projects.find(project => project.id == id)
  
    if(!project){
      return res.json({error: 'Erro, id not found'})
    }
    
    next()
  }
}