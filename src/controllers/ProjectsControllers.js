
let projects = []


module.exports = {

  async newProject(req,res) {

    const { id, title } = req.body
    
    project = {
      id,
      title,
      tasks: []
    }

    projects.push(project)
    
    return res.json(project)
  },

  async listProject (req, res) {
    return res.json(projects)
  },

  async updateProject(req, res) {
    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(project => project.id == id)

    project.title = title
    
    return res.json(project)
  },

  async deleteProject(req, res) {
    const { id } = req.params;

    const project = projects.findIndex(project => project.id == id)

    projects.splice(project, 1)

    return res.json('deletou')
  },
  
  async newTask(req,res) {

    const { id } = req.params;
    const { title } = req.body;

    const project = projects.find(project => project.id == id)
    
    project.tasks.push(title)
    
    return res.json(project)

  },
  projects
}