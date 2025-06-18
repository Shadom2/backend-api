let tareas = [];

exports.getTareas = (req, res) => {
    console.log(`El número de tareas es ${tareas.lenght}`);
    res.json(tareas)
};

exports.addTarea = (req,res) => {
    let {nombre,completed} = req.body;
    let nuevo = {id:Date.now(), nombre, completed}
    tareas.push(nuevo);
    res.status(201).json(nuevo);
}