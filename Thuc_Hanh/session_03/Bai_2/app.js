let tasks = [];

const taskModal = document.getElementById('task-modal');
const taskForm = document.getElementById('task-form');
const modalTitle = document.getElementById('modal-title');

const btnOpenForm = document.getElementById('btn-open-form');
const btnCloseForm = document.getElementById('btn-close-form');
const btnCancel = document.getElementById('btn-cancel');

const taskIdInput = document.getElementById('task-id');
const taskTitleInput = document.getElementById('task-title');
const taskDescInput = document.getElementById('task-desc');
const taskDeadlineInput = document.getElementById('task-deadline');
const taskPriorityInput = document.getElementById('task-priority');

const taskListContainer = document.getElementById('task-list');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');
const toastContainer = document.getElementById('toast-container');

document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    initEventListeners();
});

function initEventListeners() {
    btnOpenForm.addEventListener('click', () => openModal());
    btnCloseForm.addEventListener('click', closeModal);
    btnCancel.addEventListener('click', closeModal);

    taskModal.addEventListener('click', (e) => {
        if (e.target === taskModal) closeModal();
    });

    taskForm.addEventListener('submit', handleFormSubmit);
    taskListContainer.addEventListener('click', handleTaskListClick);
    taskListContainer.addEventListener('change', handleStatusChange);
}

function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    tasks = storedTasks ? JSON.parse(storedTasks) : [];
    renderTasks();
    updateTaskSummary();
}

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function showMessage(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function updateTaskSummary() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

function renderTasks() {
    taskListContainer.innerHTML = '';

    if (tasks.length === 0) {
        taskListContainer.innerHTML = `<div class="empty-state">Chưa có công việc nào. Hãy ấn nút thêm để bắt đầu ngày mới!</div>`;
        return;
    }

    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item priority-${task.priority} ${task.completed ? 'completed' : ''}`;
        taskItem.dataset.id = task.id;

        taskItem.innerHTML = `
            <div class="task-left">
                <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                <div class="task-info">
                    <h3>${escapeHTML(task.title)}</h3>
                    ${task.description ? `<p class="task-desc">${escapeHTML(task.description)}</p>` : ''}
                    <div class="task-meta">
                        <span class="badge badge-deadline">📅 Hạn: ${task.deadline}</span>
                        <span class="badge badge-priority">📍 Ưu tiên: ${task.priority}</span>
                    </div>
                </div>
            </div>
            <div class="task-right">
                <button class="btn-icon btn-edit" title="Sửa công việc">✏️</button>
                <button class="btn-icon btn-delete" title="Xóa công việc">🗑️</button>
            </div>
        `;
        taskListContainer.appendChild(taskItem);
    });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}

function openModal(task = null) {
    taskModal.classList.add('open');
    if (task) {
        modalTitle.textContent = "Sửa Công Việc";
        taskIdInput.value = task.id;
        taskTitleInput.value = task.title;
        taskDescInput.value = task.description;
        taskDeadlineInput.value = task.deadline;
        taskPriorityInput.value = task.priority;
    } else {
        modalTitle.textContent = "Thêm Công Việc Mới";
        taskForm.reset();
        taskIdInput.value = '';
    }
}

function closeModal() {
    taskModal.classList.remove('open');
    taskForm.reset();
    taskIdInput.value = '';
}

function handleFormSubmit(e) {
    e.preventDefault();

    const id = taskIdInput.value;
    const title = taskTitleInput.value.trim();
    const description = taskDescInput.value.trim();
    const deadline = taskDeadlineInput.value;
    const priority = taskPriorityInput.value;

    if (!title || !deadline) return;

    if (id) {
        const taskIndex = tasks.findIndex(t => t.id === id);
        if (taskIndex !== -1) {
            tasks[taskIndex] = { ...tasks[taskIndex], title, description, deadline, priority };
            showMessage("Đã cập nhật công việc thành công! ✨");
        }
    } else {
        const newTask = {
            id: Date.now().toString(),
            title,
            description,
            deadline,
            priority,
            completed: false
        };
        tasks.push(newTask);
        showMessage("Đã thêm công việc mới thành công! 🎉");
    }

    saveTasks();
    renderTasks();
    updateTaskSummary();
    closeModal();
}

function handleTaskListClick(e) {
    const taskItem = e.target.closest('.task-item');
    if (!taskItem) return;
    
    const taskId = taskItem.dataset.id;
    const task = tasks.find(t => t.id === taskId);

    if (e.target.classList.contains('btn-delete')) {
        const isConfirm = confirm(`Bạn có chắc chắn muốn xóa công việc "${task.title}" không?`);
        if (isConfirm) {
            tasks = tasks.filter(t => t.id !== taskId);
            saveTasks();
            renderTasks();
            updateTaskSummary();
            showMessage("Đã xóa công việc thành công! 🗑️");
        }
    }

    if (e.target.classList.contains('btn-edit')) {
        openModal(task);
    }
}

function handleStatusChange(e) {
    if (e.target.classList.contains('task-checkbox')) {
        const taskItem = e.target.closest('.task-item');
        const taskId = taskItem.dataset.id;
        const task = tasks.find(t => t.id === taskId);

        if (task) {
            task.completed = e.target.checked;
            
            if (task.completed) {
                taskItem.classList.add('completed');
            } else {
                taskItem.classList.remove('completed');
            }

            saveTasks();
            renderTasks();
            updateTaskSummary();
            showMessage(task.completed ? "Chúc mừng bạn đã hoàn thành! 👑" : "Đã chuyển trạng thái thành chưa hoàn thành.");
        }
    }
}