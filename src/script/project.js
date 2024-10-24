function Project() {
  this.screenshot = undefined;
  this.title = undefined;
  this.createdTime = undefined; // change to initialized to current Date time
  this.lastEditedTime = undefined;
  this.groups = [] = undefined;
  this.isFavorite = false;
  this.content = undefined;
}

Project.prototype.getTitle = function () {
  return this.title;
};
Project.prototype.setTitle = function () {};

Project.prototype.getCreatedTime = function () {
  return this.createdTime;
};

Project.prototype.getLastEditedTime = function () {
  return this.getLastEditedTime;
};

Project.prototype.getGroups = function () {
  return this.groups;
};
Project.prototype.setGroups = function () {};

Project.prototype.getIsFavorite = function () {
  return this.isFavorite;
};
Project.prototype.setIsFavorite = function () {};

Project.prototype.getContent = function () {
  return this.content;
};
Project.prototype.setContent = function () {};

// * 1. Make each project a proxy with:
//          set trap to change last edited time

// ?
//
// const handler = function () {};
// let Project = new Proxy(Project, handler);
