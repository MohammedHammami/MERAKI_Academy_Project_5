const pool = require("../models/db");

const getAllCrafts = (req,res) => {
  const query = `SELECT * FROM crafts `;
  pool
    .query(query)
    .then((result) => {
      res.status(200).json({
        sucsess: true,
        result: result.rows,
        ss:'ss'
      });
    })
    .catch((err) => {
      res.status(200).json({
        sucsess: false,
        err,
      });
    });
};
const updatecraftById = (req,res) => {
  const id = req.params.id
  const {name} = req.body

  const data=[name||null,id]
  
  const query=`UPDATE crafts SET name = COALESCE($1,name) WHERE id = $2 RETURNING *;`
  pool
  .query(query,data)
  .then((result)=>{
    res.status(200).json({
      success: true,
      message:"craft updated",
      user:result.rows
    })
  })
  .catch((err)=>{
    res.status(500).json({
      success: false,
      message: "Server Error",
      err: err.message
    })
  })
};
module.exports={
    getAllCrafts,
    updatecraftById
}
