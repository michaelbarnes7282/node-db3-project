const db = require("../data/db-config.js");

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where({ id })
        .first()
}

function findSteps(id) {
    return db("schemes as sc")
        .join("steps as st", "st.scheme_id", "sc.id")
        .where("sc.id", id)
        .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
        .orderBy("st.step_number")
}

function add(schemeData) {
    return db("schemes")
        .insert(schemeData)
}

function addStep(stepData, id) {
    stepData.scheme_id = id;
    return db("steps")
        .insert(stepData)
}

function update(changes, id) {
    return db("schemes")
        .where("id", id)
        .first()
        .update(changes)
}

function remove(id) {
    return db("schemes")
        .where("id", id)
        .del()
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}