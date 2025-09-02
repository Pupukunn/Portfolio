const express = require('express');
require('dotenv').config();
const { pool } = require('./db');
const cors = require("cors");


const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  }));
  
  
app.use(express.json());
app.post("/register", async (req, res) => {
    try {
      const { name, address, tel, username, password } = req.body;
  
      // เช็คว่ามี username นี้แล้วหรือยัง
      const [exist] = await pool.query(
        "SELECT * FROM member WHERE username = ?",
        [username]
      );
      if (exist.length > 0) {
        return res.status(400).json({ error: "Username นี้ถูกใช้แล้ว" });
      }
 
      // insert ข้อมูล
      const [result] = await pool.query(
        "INSERT INTO member(name, address, tel, username, password) VALUES (?, ?, ?, ?, ?)",
        [name, address, tel, username, password]
      );
  
      res.status(201).json({ 
        message: "สมัครสมาชิกสำเร็จ", 
        id: result.insertId, 
        username 
      });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  });
  

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`API running on http://localhost:${port}`));