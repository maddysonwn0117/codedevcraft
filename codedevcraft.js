// task_scheduler.js

const schedule = require('node-schedule');

// Define a task scheduler function
function scheduleTask(taskName, dueDate) {
    const job = schedule.scheduleJob(dueDate, function() {
        console.log(`Task "${taskName}" is due now.`);
        // You can add logic here to send notifications, emails, etc.
    });
    console.log(`Task "${taskName}" scheduled for ${dueDate}`);
}

// Example usage
scheduleTask('Task 1', new Date(Date.now() + 5000)); // Task 1 due in 5 seconds
scheduleTask('Task 2', new Date(Date.now() + 10000)); // Task 2 due in 10 seconds
