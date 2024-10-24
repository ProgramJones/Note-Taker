// Includes methods for handling projects in bulk
// Methods should not know what each project includes
class ProjectManager {
  #allProjects = [];
  #projects = [];

  sortProjects() {}
  //   ProjectManager.sortProjects(projectsArray)
  //   - Sorting the passed array by whatever filtered criteria
  filterProjects() {}
  //   ProjectManager.filterProjects({criteria})
  //   - Updating the projects array to include only what fits the passed criteria
  // - Object is passed so multiple criteria can be filtered
  viewProjects() {}
  //   - print the relevant keys and values for array
  //   -
  //   - Viewing (default is card view)
  //   - Card view
  //       - Screenshot
  //       - Title
  //       - Group Name
  //       - Last edited time
  //       - Icons
  //   - List view (verbose)
  //       - Screenshot
  //       - Title
  //       - Group Name
  //       - Created Time
  //       - Last Edited Time
  //       - Icons
  //   - How to apply this to both list and card views
  createProject() {}
  //   1. make instance of typeOfProject
  //   1. typeOfProject factory will assign fields in closure
  // 2. setPrototypeOf(instance, Project)
  // 3. Add instance to projects object
  deleteProject() {}
  //   - Remove project key from allProjects and Projects
  updateProject() {}
  // - Find project in projects and allProjects and update the properties
}

class GroupManager {
  #groups = [];

  createGroupOption() {}

  deleteGroupOption() {}

  viewGroupOptions() {}
}
