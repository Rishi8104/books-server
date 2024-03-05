import connectDB from "../Config/config.js";

export function FeatchAllBooks(req, res) {
    connectDB.query("SELECT * FROM Books", (err, result) => {
        if (err) {
            console.error("Error Fetching All Books:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            // Send the 'result' data in the response
            res.status(200).json(result);
        }
    });
}
export function SaveBooks(req,res){
    const q="INSERT INTO Books (`Book`,`description`,`cover` ,`price`) VALUES(?)"
    const values=[req.body.Book,
                    req.body.description,
                    req.body.cover,
                req.body.price]
        connectDB.query(q, [values], (err, result) => {
            if(err){
                console.error("Error Insert book:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }else{
                res.status(200).json("Book has been Insert successfully!!");
            }
        })
}

export function DelateBookbyId (req, res){
    const id=req.params.id;
   const q = "DELETE FROM Books WHERE id = ?"
    connectDB.query(q, [id], (err, result) => {
        if(err){
            console.error("Error Delete book:", err);
            res.status(500).json({ error: "Internal Server Error" });
        }else{
            res.status(200).json("Book has been delete successfully!!");
        }
        
    })
}

export function UpdateBookById (req, res) {
    const id = req.params.id;
    const q = "UPDATE Books SET `Book` = ?, `description` = ?, `cover` = ?, `price` = ? WHERE id = ?";
    
    const values = [
        req.body.Book,
        req.body.description,
        req.body.cover,
        req.body.price
    ];

    connectDB.query(q, [...values, id], (err, result) => {
        console.log("Query:", q);
        if (err) {
            console.error("Error updating book:", err);
            res.status(500).json({ error: "Internal Server Error" });
        } else {
            console.log(q);
            res. status(200).json("Book has been updated successfully!!");
        }
    });
};