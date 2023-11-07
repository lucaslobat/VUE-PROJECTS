<template>
    <div class="container">
        <h1>Coach form</h1>
        <form>
            <div class="form-group">
                <label for="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" required>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" required>
            </div>
            <div class="form-group">
                <label for="biography">Biography</label>
                <textarea id="biography" name="biography" required></textarea>
            </div>
            <div class="form-group">
                <label for="rate">Rate</label>
                <input type="number" id="rate" name="rate" required>
                <!--                 <div class="rate">
                    <input type="radio" id="rate1" name="rate" value="1">
                    <label for="rate1"></label>
                    <input type="radio" id="rate2" name="rate" value="2">
                    <label for="rate2"></label>
                    <input type="radio" id="rate3" name="rate" value="3">
                    <label for="rate3"></label>
                    <input type="radio" id="rate4" name="rate" value="4">
                    <label for="rate4"></label>
                    <input type="radio" id="rate5" name="rate" value="5">
                    <label for="rate5"></label>
                </div> -->
            </div>
            <div class="form-group technologies">
                <label>Technologies</label>
                <label for="html"><input type="checkbox" id="html" name="technologies[]" value="HTML"> HTML</label>
                <label for="css"><input type="checkbox" id="css" name="technologies[]" value="CSS"> CSS</label>
                <label for="javascript"><input type="checkbox" id="javascript" name="technologies[]" value="JavaScript">
                    JavaScript</label>
                <label for="react"><input type="checkbox" id="react" name="technologies[]" value="React"> React</label>
                <label for="nodejs"><input type="checkbox" id="nodejs" name="technologies[]" value="Node.js">
                    Node.js</label>
            </div>
            <button class="btn" type="submit">Submit</button>
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

.form-group .rate input[type="radio"] {
    display: none;
}

.form-group .rate label {
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
}

.form-group .rate label:before {
    content: "\2605";
    font-size: 20px;
    color: #ccc;
}

.form-group .rate input[type="radio"]:checked+label:before {
    color: #f0ad4e;
}

.form-group .technologies label {
    display: block;
}

.btn {
    background: #FF5A5F;
    color: #fff;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    transition: background 0.3s, transform 0.3s;
}

.btn:hover {
    background: #E74B4E;
}
</style>