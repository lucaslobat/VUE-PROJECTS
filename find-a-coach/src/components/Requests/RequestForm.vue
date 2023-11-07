<template>
    <div class="container">
        <h1>Request Form</h1>
        <form>
            <div class="form-group">
                <label for="requester-name">Your Name</label>
                <input type="text" id="requester-name" name="requester-name" required>
            </div>
            <div class="form-group">
                <label for="request-type">Request Type</label>
                <input type="text" id="request-type" name="request-type" required>
            </div>
            <div class="form-group">
                <label for="request-description">Request Description</label>
                <textarea id="request-description" name="request-description" required></textarea>
            </div>
            <button class="btn" type="submit">Submit Request</button>
        </form>
    </div>
</template>
<script></script>
<style scoped>
.container {
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    font-weight: bold;
    display: block;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.form-group textarea {
    height: 100px;
}

.btn {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
}

.btn:hover {
    background-color: #0056b3;
}
</style>