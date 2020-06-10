const db= require("../data/db-config.js");

function find() {
    return db("schemes")
}

function findById(id) {
    return db("schemes")
        .where("id", id)
}

function findSteps(id) {
    return db("schemes as sc")
        .join("steps as st", "st.scheme_id", "sc.id")
        .where("sc.id", id)
        .select("st.id", "sc.scheme_name", "st.step_number", "st.instructions")
        .orderBy("st.step_number")
}

module.exports = {
    find,
    findById,
    findSteps,
}