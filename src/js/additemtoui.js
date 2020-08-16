function addItemToUi(item, databaseName) {
  if (databaseName === 'todo') {
    const todoRow = document.querySelector('#todoRow');
    const todoArticle = document.createElement('article');
    todoArticle.className = 'list_group_item list_group_item_action flex-column align-items-start';
    todoArticle.innerHTML = `

                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">${item.title}</h5>
                  <small>${item.priority}</small>
                </div>
                <p class="mb-1">${item.dueDate}</p>
                <div class="buttonsDiv d-flex">
                  <div class="mr_10">
                    <button
                      type="button"
                      class="btn-sm btn btn-outline-info"
                      data-toggle="collapse"
                      data-target="#collapseExample${item.id}"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Details
                    </button>
                  </div>
                  <div class="mr_10">
                    <button type="button" class="btn-sm btn btn-outline-success" id="done${item.id}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        style="width:15px; height: 15px;"
                      >
                        <path
                          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div class="mr_10">
                    <button
                      type="button"
                      class="btn-sm btn btn-outline-primary"
                      data-toggle="modal"
                      data-target="#editBookModal${item.id}"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        style="width:15px; height: 15px;"
                      >
                        <path
                          d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                        />
                      </svg>
                    </button>
                    <div
                      class="modal fade"
                      id="editBookModal${item.id}"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampModalLabel">Edit Todo</h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <form id="editTodoForm${item.id}">
                            <div class="modal-body">
                              <!-- <input type="hidden" class="values" id="${item.id}" data-uid="uid" /> -->
                              <div class="form-group">
                                <label for="editTitle">Edit Title</label>
                                <input
                                  type="text"
                                  class="form-control values"
                                  id="editTitle${item.id}"
                                  placeholder="${item.title}"
                                  values="${item.title}"
                                  required
                                />
                              </div>
                              <div class="form-group">
                                <label for="description">Edit Description</label>
                                <input
                                  type="text"
                                  class="form-control values"
                                  id="editDescription${item.id}"
                                  placeholder="${item.description}"
                                  value="${item.description}"
                                  required
                                />
                              </div>
                              <div class="form-group">
                                <label for="priority">Edit Priority</label>
                                <input
                                  type="text"
                                  class="form-control values"
                                  id="editPriority${item.id}"
                                  placeholder="${item.priority}"
                                  values="${item.priority}"
                                  required
                                />
                              </div>
                              <div class="form-group">
                                <label for="editDueDate">Edit Due Date</label>
                                <input
                                  type="datetime-local"
                                  class="form-control values"
                                  id="editDueDate${item.id}"
                                  placeholder="${item.dueDate}"
                                  values="${item.dueDate}"
                                  required
                                />
                              </div>
                              <div class="form-group">
                                <label for="project">Edit Project</label>
                                <input
                                  type="text"
                                  class="form-control values"
                                  id="editProject${item.id}"
                                  placeholder="${item.project}"
                                  values="${item.project}"
                                  required
                                />
                              </div>
                            </div>
                            <div class="modal-footer">
                              <button type="submit" class="btn btn-primary" id="editTodo${item.id}">
                                Edit Todo
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mr_10">
                    <button type="button" class="btn-sm btn btn-outline-danger" id="deleteTodo${item.id}">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style="width:15px; height: 15px;"
                      >
                        <path
                          d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="collapse mt_10" id="collapseExample${item.id}">
                  <p>${item.description}</p>
                  <p><strong>Project:</strong> ${item.project}</p>
                  <p><strong>Due Date:</strong> ${item.dueDate}</p>
                </div>

          `;

    todoRow.appendChild(todoArticle);
  } else if (databaseName === 'project') {
    const projectRow = document.querySelector('#projectRow');
    const projectLi = document.createElement('li');
    projectLi.className = 'list_group_item';
    projectLi.innerHTML = `<span>Personal</span>
          `;

    projectRow.appendChild(projectLi);
  }
}

export default addItemToUi;
